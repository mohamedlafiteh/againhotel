import React from "react";
import Sky from "../components/Sky";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Rooms = () => {
  return (
    <Sky hero="roomsHero">
      <Banner title="Courses availble">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Sky>
  );
};

export default Rooms;
