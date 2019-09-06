import React from "react";
import Sky from "../components/Sky";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Sky>
      <Banner title="404" subtitle="Page not found">
        <Link to="/" className="btn-primary">
          Return Home
        </Link>
      </Banner>
    </Sky>
  );
}
