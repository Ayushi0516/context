import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Status = () => {
  const { status } = useContext(AuthContext);
  return (
    <div>
      Token: <h1>{status}</h1>
    </div>
  );
};

export default Status;