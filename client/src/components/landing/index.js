import React from "react";
import Background from "./Background";
import Products from "./Products";
import NavBar from "../general/Navbar";

const index = () => {
  return (
    <>
    <NavBar/>
      <Background />
      <Products />
    </>
  );
};

export default index;
