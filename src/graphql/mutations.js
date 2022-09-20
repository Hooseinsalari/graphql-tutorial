import { gql } from "@apollo/client";

const CREATE_USER = gql`
  mutation getUser($name: String!, $username: String!, $email: String!) {
    createUser(input: { name: $name, username: $username, email: $email }) {
      id
      name
      username
      email
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $name: String!, $phone: String!) {
    updateUser(id: $id, input: { name: $name, phone: $phone }) {
      id
      name
      username
      phone
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation {
    deleteUser(id: 1)
  }
`;

export { CREATE_USER, UPDATE_USER, DELETE_USER };
