import React from "react";

// apollo
import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";

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
