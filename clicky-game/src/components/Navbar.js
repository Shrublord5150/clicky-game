import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow p-3 mb-5 rounded background ">
        <div className="container">
        <h1> <a href="http://localhost:3000/">Up In Smoke...</a></h1>
        </div>
        <ul className="mr-sm-4">
          <li >Score:</li>
          <li>Top Score:</li>
        </ul>





      </nav>
    </div>
  );
}

export default Navbar;