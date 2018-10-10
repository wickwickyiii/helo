import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      edit: false,
      sessionProof: {}
    };
  }

  componentDidMount() {
    axios
      .get("/login")
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
    this.setState({
      firstname: "",
      lastname: "",
      password: ""
    });
  }

  updateInfo(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleFirstname(e) {
    this.setState({
      firstname: e.target.value
    });
  }
  handleLastname(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  render() {
    return (
      <div>
        <h1>Auth</h1>
        <input
          placeholder="First Name"
          onChange={e => this.handleFirstname(e)}
        />
        <input placeholder="Last Name" onChange={e => this.handleLastname(e)} />
        <input placeholder="Password" onChange={e => this.handlePassword(e)} />
        <div>
          <Link to="/dashboard">
            <button onSubmit={() => this.componentDidMount()}>Login</button>
          </Link>
        </div>
        {!this.state.edit ? (
          <div>
            <button onClick={() => this.toggleEdit()}>Edit Info</button>
          </div>
        ) : (
          <div>
            <input
              name={this.state.firstname}
              onChange={e => this.updateInfo(e)}
            />
            <input
              name={this.state.lastname}
              onChange={e => this.updateInfo(e)}
            />
            <input
              name={this.state.password}
              onChange={e => this.updateInfo(e)}
            />
            <div>
              <button onClick={() => this.toggleEdit()}>Done</button>
            </div>
          </div>
        )}
        <Link to="/dashboard">
          <Dashboard
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            password={this.state.password}
          />
        </Link>
      </div>
    );
  }
}

export default Auth;
