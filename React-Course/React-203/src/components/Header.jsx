import React from "react";

const HeaderOne = ({ user, setUser }) => {
  return (
    <>
      Welcome, {user}
      <button onClick={() => setUser('')}>Logout</button>
    </>
  );
};

export default HeaderOne;
