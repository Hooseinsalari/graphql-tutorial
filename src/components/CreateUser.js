import React from "react";

// apollo
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation {
    createUser (
      input: { name: "Hossein", username: "hosa", email: "sal@gmail.com" }
    ) {
      id
      name
      username
      email
    }
  }
`;

const CreateUser = () => {
    const [createUser, {loading, data, error, called}] = useMutation(CREATE_USER)

    console.log({loading, data, error, called});

  return <div>
    <button onClick={() => createUser()}>get data</button>
  </div>;
};

export default CreateUser;
