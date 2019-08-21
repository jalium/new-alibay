import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./main.css";
import "./login.css";
import { BrowserRouter, Route } from "react-router-dom";
import SellerForm from "./SellerForm.jsx";
import Experience from "./Experiences.jsx";
import SelectExp from "./SelectExp.jsx";
import SignInOut from "./SignInAndOut.jsx";
import Search from "./Search.jsx";
import Checkout from "./Checkout.jsx"

class UnconnectedApp extends Component {
  renderListing = routerData => {
    let listingId = routerData.match.params.lid;
    let candidate = this.props.posts.filter(listing => {
      return listing._id === listingId;
    });
    return (
      <div>
        <Link to="/experiences/">
          <div className="top-bar">
            <img src="/uploads/logo2.png" />
          </div>
        </Link>
        <SelectExp card={candidate[0]} />;
      </div>
    );
  };

  renderSearchDest = () => {
    return (
      <div>
        <SearchDest />
      </div>
    );
  };
  renderCheckout = routerData => {
    console.log("routerdata",routerData)
    let listingId = routerData.match.params.lid;
    console.log("listingId", listingId)
    let candidate = this.props.posts.filter(listing => {
      return listing._id === listingId;
    });
    console.log("candidatecheckout", candidate)
    return (
      <div>
        <Link to="/experiences/">
          <div className="top-bar">
            <img src="/uploads/logo2.png" />
          </div>
        </Link>
        <Checkout card={candidate[0]} range={routerData.location.state.range} />;
      </div>
    );
  };
  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path="/" render={renderMain} />
          <Route exact={true} path="/sellExp" render={renderSellerForm} />
          <Route exact={true} path="/experiences" render={renderExperiences} />
          <Route exact={true} path="/checkout/:lid" render={this.renderCheckout} />
          <Route
            exact={true}
            path="/experiences/:lid"
            render={this.renderListing}
          />
          <Route
            exact={true}
            path="/searchDest"
            render={this.renderSearchDest}
          />
        </div>
      </BrowserRouter>
    );
  };
}

let renderMain = () => {
  return (
    <div>
      <div className="top-bar">
        <img src="/uploads/logo2.png" />
      </div>
      <div>
        <div>
          <SignInOut />
        </div>
      </div>
    </div>
  );
};

let renderSellerForm = () => {
  return (
    <div>
      <SellerForm />
    </div>
  );
};

let renderExperiences = () => {
  return (
    <div>
      <div className="top-bar">
        <img src="/uploads/logo2.png" />
        <Search />
      </div>
      <div>
        <Experience />
      </div>
    </div>
  );
};

let mapStateToProps = state => {
  return { posts: state.listings };
};

let App = connect(mapStateToProps)(UnconnectedApp);
export default App
