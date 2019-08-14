import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";

class ListingCard extends Component {
  render = () => {
    return (
      <div className="card">
        <Link to={"/listing/" + this.props.listingId}>
          {this.props.listingTitle}
        </Link>
        <div>destination: {this.props.destination}</div>
        <div>amenities: {this.props.amenities}</div>
        <div>rating: {this.props.rating}</div>
        <div>travel dates: {this.props.date}</div>
        <div>total price: {this.props.price}</div>
        <img height="100px" src={this.props.frontendPath} />
      </div>
    );
  };
}

export default ListingCard;
