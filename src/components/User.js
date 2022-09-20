import React, { useState } from "react";

// apollo
import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query getUser($id: ID!){
    user(id: $id) {
      id
      name
      email
      username
    }
  }
`;

const User = () => {
  const [id, setId] = useState("5");
  const { loading, data, error } = useQuery(GET_USER, {
    variables: {id: id}
  });
  console.log({loading, data, error});

  const inputHandler = (e) => {
    setId(e.target.value);
  };

  if (loading) return <h1>Loading</h1>;

  if (error) return <h1>error</h1>;

  return (
    <div>
      <input type="number" value={id} onChange={inputHandler} />
        <div>
            <h1>{data.user.name}</h1>
            <h1>{data.user.id}</h1>
        </div>
    </div>
  );
};

export default User;
