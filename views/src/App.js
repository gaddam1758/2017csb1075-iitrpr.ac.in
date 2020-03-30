import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.component";
import CreateForm from "./components/create-form.component";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <br />
          <Route path="/create_form" component={CreateForm} />
        </div>
      </Router>
    );
  }
}
export default App;
