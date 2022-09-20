import React from "react";

// apollo
import { useMutation } from "@apollo/client";

import { UPDATE_USER } from "../graphql/mutations";

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
