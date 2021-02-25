import React from "react";
import "../styles/header.css";
import Jumbotron from "react-bootstrap/Jumbotron";

function Header() {
  return (
    <Jumbotron>
      <div className="header-bg">
        <h1>Employee Directory</h1>
        <p>
          Click on Corrorts to filter by or use the search box to narrow your
          results
        </p>
      </div>
    </Jumbotron>
  );
}

export default Header;
