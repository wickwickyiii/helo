import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      firstname: this.props.firstname,
      lastname: this.props.lastname,
      password: this.props.password,
      edit: false,
      sessionProof: ""
    };
  }

  handleMessage(e) {
    this.setState({
      message: e.target.value
    });
  }

  sendMessage() {
    let { message } = this.state;
    axios.post("/dash/message/:id", { message }).then(response => {
      console.log(response);
    });
  }

  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  sessionProof() {
    axios.get("/session/proof").then(response => {
      this.setState({
        sessionProof: response
      });
    });
    console.log(this.state.sessionProof);
  }

  render() {
    return (
      <div>
        <button onClick={() => this.sessionProof()}>Session Proof</button>
        {this.state.sessionProof}
        {/* <h1>Dashboard</h1>
        <input onChange={e => this.handleMessage(e)} />
        <button onClick={() => this.sendMessage()}>Send Message</button>

        {this.state.message}
        {!this.state.edit ? (
          <div>
            <button onClick={() => this.toggleEdit()}>Edit Message</button>
          </div>
        ) : (
          <div>
            <input
              name={this.state.message}
              onChange={e => this.handleMessage(e)}
            />
            <div onClick={() => this.toggleEdit()}>
              <button onClick={() => this.componentDidUpdate()}>Done</button>
            </div>
          </div>
        )} */}
      </div>
    );
  }
}

export default Dashboard;
