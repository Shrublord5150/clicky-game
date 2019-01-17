import React from "react";
import "../styles/Card.css";


function Card(props) {
    return (
      <div className="card">
        <div className="img-container">
        <img alt={props.id} src={props.image} />

        </div>

      </div>
    );
  }

export default Card;
