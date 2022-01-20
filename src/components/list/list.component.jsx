import React from "react";
import "./list.styles.css";
import "../list-item/list-item.styles.css"
import { ListItem } from "../list-item/list-item.component";

export const List = (props) => (
  <div className="list">

    <div className="list-title">
        <span> Departure Time </span>
        <span> Destination </span>
        <span> Route </span>
        <span> Train </span>
    </div>

    {props.trains.map((train) => (
        <ListItem key={train.id} train={train}></ListItem>
    ))}
    
  </div>
);

// trip.data.id -> destination -> CR-503364-140-MRRockport
// route.data.id -> route -> CR-Newburyport
