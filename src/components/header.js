import React from "react";
import "../styles/header.css";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
  return (
    <Jumbotron className="header-bg">
      <h1>Employee Directory</h1>
    </Jumbotron>
  );
}

export default Header;
