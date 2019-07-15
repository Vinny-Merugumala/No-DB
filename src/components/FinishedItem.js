import React, { Component } from "react";
import axios from "axios";

export default class FinishedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      description: ""
    };
  }
  componentDidMount() {
    this.setState({
      date: this.props.date,
      time: this.props.time,
      description: this.props.description
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClick = () => {
    const { date, time, description } = this.state;
    axios
      .put("/api/finished/" + this.props.id, { date, time, description })
      .then(response => {
        this.props.updateFinishedTasks(response.data);
      });
  };
  handleClick2 = () => {
    const { date, time, description } = this.state;
    axios
      .delete("/api/finished/" + this.props.id, { date, time, description })
      .then(response => {
        this.props.deleteFinishedTasks(response.data);
      });
  };

  render() {
    return (
      <ul>
        <div class="container">
          <div id="todo-date">
            <h3>{this.props.date}</h3>
          </div>
          <div id="todo-time">
            <h3>{this.props.time}</h3>
          </div>
          <div id="todo-description">
            <h3>{this.props.description}</h3>
          </div>

          <div id="todo-input-bars">
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
            <button id="update" onClick={this.handleClick}>
              Update
            </button>
            <button id="delete" onClick={this.handleClick2}>
              Delete
            </button>
          </div>
        </div>
      </ul>
    );
  }
}
