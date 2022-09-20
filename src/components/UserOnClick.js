import React, { useState } from "react";

// apollo
import { useLazyQuery } from "@apollo/client";

// query
import { GET_USER } from "../graphql/queries";

const UserOnClick = () => {
  const [id, setId] = useState("5");
  const [getUser, { loading, data, error, called }] = useLazyQuery(GET_USER, {
    variables: { id: id },
  });
  console.log({ loading, data, error, called });

  const inputHandler = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <input type="number" value={id} onChange={inputHandler} />
      <button onClick={() => getUser()}>click</button>
      {loading && <h1>Loading...</h1>}
      {error && <h1>error</h1>}
      <div>
        {data && (
          <>
            <h1>{data.user.name}</h1>
            <h1>{data.user.id}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default UserOnClick;
