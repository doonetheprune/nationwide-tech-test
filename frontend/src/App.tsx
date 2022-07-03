import React from "react";
import { useQuery, gql } from "@apollo/client";
import Modal from "react-modal";
import { AddListing } from "./components/AddListing";

import "./App.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const GET_PROPERTY_LISTING = gql`
    query {
        findAll {
            id
            propertyType
            headline
            description
            addressLine1
        }
    }
`;

function DisplayPropertyListings() {
  const { loading, error, data } = useQuery(GET_PROPERTY_LISTING);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  interface PropertyListing {
    id: number,
    propertyType: string,
    headline: string,
    description: string,
    addressLine1: string,
  }

  return data.findAll.map(({ id, propertyType, headline, description, addressLine1 }: PropertyListing) => (
    <tr key={id}>
      <td>{propertyType}</td>
      <td>{headline}</td>
      <td>{description}</td>
      <td>{addressLine1}</td>
      <br />
    </tr>
  ));
}

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  let newListingForm = { headline: "", propertyType: "Detached" };

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          style={customStyles}
          contentLabel="Add Property Listing"
        >
          <h2>Add Property</h2>
          <AddListing onCompleted={toggleModal} refetchQueries={[GET_PROPERTY_LISTING]} />
        </Modal>
        <h2>Property Listings</h2>
        <br />
        <button type="button" onClick={toggleModal}>Add A New Listing ➕</button>
        <table>
          <thead>
          <tr>
            <th>Property Type</th>
            <th>Headline</th>
            <th>Description</th>
            <th>Address Line 1</th>
          </tr>
          </thead>
          <tbody>
          <DisplayPropertyListings />
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
