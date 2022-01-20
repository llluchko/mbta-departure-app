import React from "react";
import "./list.styles.css";
import "../list-item/list-item.styles.css"
import { ListItem } from "../list-item/list-item.component";

export const List = ({trains}) => (
  <div className="list">

    <div className="list-title">
        <span className="list-title-item"> Departure Time </span>
        <span className="list-title-item"> Destination </span>
        <span className="list-title-item"> Route </span>
        <span className="list-title-item"> Train </span>
    </div>

    {trains.map((train) => (
        <ListItem key={train.id} train={train}></ListItem>
    ))}
    
  </div>
);