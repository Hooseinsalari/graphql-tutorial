import React from "react";

// apollo
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation getUser($name: String!, $username: String!, $email: String!) {
    createUser (
      input: { name: $name, username: $username, email: $email }
    ) {
      id
      name
      username
      email
    }
  }
`;

const CreateUser = () => {
    const [createUser, {loading, data, error, called}] = useMutation(CREATE_USER, {
        variables: {
            name: "aa",
            email: "jj@gna.com",
            username: "salam"
        }
    })

    console.log({loading, data, error, called});

  return <div>
    <button onClick={() => createUser()}>get data</button>
  </div>;
};

export default CreateUser;
