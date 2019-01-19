import React from "react";
import "../styles/Navbar.css";

function Navbar(props) {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow p-3 mb-5 rounded background ">
        <div className="container">
        <h1> <a href="http://localhost:3000/">Up In Smoke...</a></h1>
        </div>
        <ul className="mr-sm-4">
          <li >Score: {props.score}</li>
          <li>Top Score: {props.topScore}</li>
        </ul>





      </nav>
    </div>
  );
}

export default Navbar;