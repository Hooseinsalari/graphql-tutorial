import { gql } from "@apollo/client";

const GET_QUERY = gql`
  query {
    users {
      data {
        name
        id
        email
        username
        phone
        todos {
          data {
            title
            id
          }
        }
      }
    }
  }
`;

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      username
    }
  }
`;

export { GET_USER, GET_QUERY };
