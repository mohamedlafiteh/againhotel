import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Rooms" component={Rooms} />
        <Route exact path="/SingleRoom/:details" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
