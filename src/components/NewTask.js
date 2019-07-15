import React, { Component } from "react";
import axios from "axios";
import "../app.css";

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      description: "",
      finished: false,
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e) {
    console.log(e.target.checked);
    this.setState({ [e.target.name]: e.target.value });
  }
  handleToggle(e) {
    this.setState({ [e.target.name]: e.target.checked });
  }

  render() {
    console.log(this.state.finished);
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!this.state.description) {
            this.setState({ error: "Please add a description" });
          } else if (this.state.finished === false) {
            axios
              .post("/api/toDo", {
                date: this.state.date,
                time: this.state.time,
                description: this.state.description
              })
              .then(response => {
                this.props.changeView("toDoTasks");
              })
              .catch(error => {
                console.log(error);
                this.setState({
                  error: "Fatal Error"
                });
              });
          } else {
            axios
              .post("/api/finished", {
                date: this.state.date,
                time: this.state.time,
                description: this.state.description
              })
              .then(response => {
                this.props.changeView("finishedTasks");
              })
              .catch(error => {
                console.log(error);
                this.setState({
                  error: "Fatal Error"
                });
              });
          }
        }}
      >
        <div class="container">
          <div id="addnew-input">
            <input
              placeholder="Add Date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
              placeholder="Add Time"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
            />
            <input
              placeholder="Add Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <input
              type="checkbox"
              placeholder="Add Description"
              name="finished"
              value={this.state.finished}
              onChange={this.handleToggle}
            />
            <label>Toggle for Finished</label>

            <button type="submit">submit</button>
            <button type="reset">Cancel</button>
          </div>
        </div>
        {this.state.error ? <p>{this.state.error}</p> : null}
      </form>
    );
  }
}
