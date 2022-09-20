import React from "react";

// apollo
import { gql, useMutation } from "@apollo/client";

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

const UpdateUser = () => {
  const [updateUser, { loading, data, error, called }] = useMutation(UPDATE_USER, {
    variables: {
        id: "1",
        name: "test Hossein",
        phone: "09102040906"
    }
  });

  console.log({ loading, data, error, called });

  return (
    <div>
      <button onClick={() => updateUser()}>update user</button>
    </div>
  );
};

export default UpdateUser;
