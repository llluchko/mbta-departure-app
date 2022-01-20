import React from "react";
import "./list-item.styles.css";

export const ListItem = ({train}) => (
  <div className="list-container">
    <span className="list-item"> {train.attributes.departure_time.split('T')[1].split('-')[0]} </span>
    <span className="list-item"> {train.relationships.trip.data.id.split('-')[2]} </span>
    <span className="list-item"> {train.relationships.route.data.id.split('-')[1]} </span>
    <span className="list-item"> {train.id.split('-')[2]} </span>
  </div>
);

// potential improvement
// -> Fetch the trip https://api-v3.mbta.com/trips/CR-503376-153-MRRockport?api_key=c13c4600c22a4786a7f7c57956252b9d
// -> Show headsign if available
// -> Fetch separate trip/route information and save into redux with selector; mapStateToProps
// -> Use moment to set the right date formatting

// trip.data.id -> destination -> CR-503364-140-MRRockport
// route.data.id -> route -> CR-Newburyport
