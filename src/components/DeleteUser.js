import React from "react";

import { gql, useMutation } from "@apollo/client";

const DELETE_USER = gql`
  mutation {
    deleteUser(id: 1)
  }
`;

const DeleteUser = () => {
  const [deleteUser, { loading, data, error, called }] = useMutation(DELETE_USER);

  console.log({ loading, data, error, called });

  return (
    <div>
      <button onClick={() => deleteUser()}>delete user</button>
    </div>
  );
};

export default DeleteUser;
