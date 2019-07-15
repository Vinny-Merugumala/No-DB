import React, { Component } from "react";
import axios from "axios";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoTasks: [],
      error: ""
    };
  }
  componentDidMount() {
    axios
      .get("/api/toDo")
      .then(response => {
        this.setState({ toDoTasks: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "Forbidden Error"
        });
      });
  }
  updateToDoTasks = newToDoTasks => {
    this.setState({ toDoTasks: newToDoTasks });
  };
  deleteToDoTasks = newToDoTasks => {
    this.setState({ toDoTasks: newToDoTasks });
  };

  render() {
    return (
      <ul>
        {this.state.toDoTasks.map(toDo => (
          <ToDoItem
            key={toDo.id}
            id={toDo.id}
            updateToDoTasks={this.updateToDoTasks}
            deleteToDoTasks={this.deleteToDoTasks}
            description={toDo.description}
            date={toDo.date}
            time={toDo.time}
          />
        ))}
      </ul>
      // <p>{this.state.error}</p>
    );
  }
}
