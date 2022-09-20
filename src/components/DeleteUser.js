import React from "react";

import { useMutation } from "@apollo/client";

import { DELETE_USER } from "../graphql/mutations";

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
