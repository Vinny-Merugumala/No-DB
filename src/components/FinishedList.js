import React, { Component } from "react";
import axios from "axios";
import FinishedItem from "./FinishedItem";

export default class FinishedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finishedTasks: [],
      error: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/finished")
      .then(response => {
        this.setState({ finishedTasks: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "Forbidden Error"
        });
      });
  }
  updateFinishedTasks = newFinishedTasks => {
    this.setState({ finishedTasks: newFinishedTasks });
  };
  deleteFinishedTasks = newFinishedTasks => {
    this.setState({ finishedTasks: newFinishedTasks });
  };

  render() {
    return (
      <ul>
        {this.state.finishedTasks.map(finished => (
          <FinishedItem
            key={finished.id}
            id={finished.id}
            updateFinishedTasks={this.updateFinishedTasks}
            deleteFinishedTasks={this.deleteFinishedTasks}
            description={finished.description}
            date={finished.date}
            time={finished.time}
          />
        ))}
      </ul>
      // <p>{this.state.error}</p>
    );
  }
}
