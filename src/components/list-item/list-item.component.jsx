import React from "react";
import "./list-item.styles.css";

export const ListItem = (props) => (
  <div className="list-container">

    <span className="list-item"> {props.departure.name} </span>
    <span className="list-item"> {props.departure.email} </span>
  </div>
);
