import React from "react";
import Sky from "../components/Sky";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Sky>
      <Banner title="The Best School" subtitle="free courses">
        <Link to="/rooms" className="btn-primary">
          CYF{" "}
        </Link>
      </Banner>
    </Sky>
  );
};

export default Home;
