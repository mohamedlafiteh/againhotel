import React, { Component } from "react";
import cyf from "../images/cyf.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggel = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={cyf} alt="hotels practice" />
              <button
                type="button"
                className="nav-btn"
                onClick={this.handleToggel}
              >
                <FaAlignRight className="nav-icon" />
              </button>
            </Link>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
