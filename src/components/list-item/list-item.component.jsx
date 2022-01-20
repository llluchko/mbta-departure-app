import React from "react";
import "./list-item.styles.css";

export const ListItem = (props) => (
  <div className="list-container">
    <span className="list-item"> {props.train.attributes.departure_time} </span>
    <span className="list-item"> {props.train.relationships.trip.data.id} </span>
    <span className="list-item"> {props.train.relationships.route.data.id} </span>
    <span className="list-item"> {props.train.id} </span>
  </div>
);

// potential improvement -> Use object destructing; Use redux with selectors or Hooks

// trip.data.id -> destination -> CR-503364-140-MRRockport
// route.data.id -> route -> CR-Newburyport
