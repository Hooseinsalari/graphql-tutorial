import React from "react";

// apollo
import { useQuery } from "@apollo/client";

// query
import { GET_QUERY } from "../graphql/queries";

const Users = () => {
  const { loading, data, error } = useQuery(GET_QUERY);
  console.log(data);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;
  return <div>
    {
        data.users.data.map((user) => 
            <div key={user.id} style={{borderBottom: "1px solid gray"}}>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.username}</p>
            </div>
        )
    }
  </div>;
};

export default Users;
