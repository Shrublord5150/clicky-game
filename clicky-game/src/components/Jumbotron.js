import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
    <h2>Instructions: {props.instructions}</h2>

  </div>
    
  );
}

export default Jumbotron;