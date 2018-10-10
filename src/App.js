import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import route from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {route}
      </div>
    );
  }
}

export default App;

// COMPETENCIES
// componentDidUpdate**********
// express static files************
// put***************
// matchObject (req.params.match.id)*******
// server rest queries ... ?
// auth sessions***********
// database Join***********
// one to many database pattern
// i.e. mulitple posts for one user
