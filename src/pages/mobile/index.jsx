import React from "react";
import { Link } from "react-router-dom";

const Mobile = () => {
  return (
    <div className="flex flex-col space-y-4">
      <Link to="/">Back</Link>
      <h3>Mobile</h3>
      <aside>
        <Link to=""> Profile</Link>
        <Link to="/mobile/auction"> Auction </Link>
        <Link to="portfolio"> Porfolio </Link>
        <Link to="settings"> Settings</Link>
      </aside>
    </div>
  );
};

export default Mobile;
