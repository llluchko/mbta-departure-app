import React from "react";
import "./list.styles.css";
import "../list-item/list-item.styles.css"
import { ListItem } from "../list-item/list-item.component";

export const List = (props) => (
  <div className="list">
    <div className="list-title">

        <span className="list-title-item"> Name </span>
        <span className="list-title-item"> Name </span>
    </div>

    {props.departures.map((departure) => (
      <ListItem key={departure.id} departure={departure}></ListItem>
    ))}
  </div>
);
