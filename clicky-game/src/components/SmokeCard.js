import React from "react";
import "../styles/Card.css";


function SmokeCard(props) {
    return (
      <div className="card" value={props.id} onClick={() => props.handleClickedCard(props.id)}>
        <div className="img-container">
        <img alt={props.id} src={props.image} />

        </div>

      </div>
    );
  }

export default SmokeCard;
