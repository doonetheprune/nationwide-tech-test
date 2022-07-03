import { gql, useMutation } from "@apollo/client";

import "./AddListing.css";

const ADD_LISTING = gql`
    mutation CreatePropertyListing($listing: CreatePropertyListingInput!) {
        createPropertyListing(createPropertyListingInput: $listing) {
            id
            propertyType
            headline
            description
            addressLine1
        }
    }
`;

type onSubmitted = () => void;

interface Props {
  refetchQueries: [any],
  onCompleted: onSubmitted;
}

export function AddListing(props: Props) {
  let propertyType: HTMLSelectElement | null;
  let headline: HTMLInputElement | null;
  let description: HTMLTextAreaElement | null;
  let addressLine1: HTMLInputElement | null;

  const [addListing, { data, loading, error }] = useMutation(ADD_LISTING, props);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      addListing({
        variables: {
          listing: {
            propertyType: propertyType !== null ? propertyType.value : null,
            headline: headline !== null ? headline.value : null,
            description: description !== null ? description.value : null,
            addressLine1: addressLine1 !== null ? addressLine1.value : null
          }
        }
      });
    }}>
      <ul className="flex-outer">
        <li>
          <label htmlFor="propertyType">Property Type</label>
          <select id="propertyType" placeholder="Property Type" ref={node => {
            propertyType = node;
          }}>
            <option>Detached</option>
            <option>Semi-Detached</option>
            <option>End Terrace</option>
          </select>
        </li>
        <li>
          <label htmlFor="headline">Headline</label>
          <input type="text" id="headline" placeholder="Headline" ref={node => {
            headline = node;
          }} />
        </li>
        <li>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows={3} placeholder="Description" ref={node => {
            description = node;
          }} />
        </li>
        <li>
          <label htmlFor="line1">Address Line 1</label>
          <input type="text" id="line1" placeholder="Line 1" ref={node => {
            addressLine1 = node;
          }} />
        </li>
        <li>
          <button type="submit" disabled={loading}>Submit</button>
        </li>
      </ul>
    </form>
  );
}