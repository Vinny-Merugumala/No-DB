import React, { Component } from "react";
import Header from "./components/Header";
import "./app.css";
import ToDoList from "./components/ToDoList";
import NewTask from "./components/NewTask";
import FinishedList from "./components/FinishedList";
import Particles from "react-particles-js";
import Footer from "./components/Footer";
// import "./reset.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ""
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div className="main-container">
        <Header />
        <Particles
          className="particles"
          params={{
            particles: {
              line_linked: {
                color: "#FFFFFF"
              },
              number: {
                value: 150
              },
              size: {
                value: 5
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
          style={{
            width: "200%",
            background: `rgb(30,217,116)`,
            background: `linear-gradient(90deg, rgba(30,217,116,1) 0%, rgba(69,170,179,1) 20%, rgba(0,212,255,1) 100%)`,
            height: `500vh`
          }}
        />

        <nav className="navbar">
          <button
            id="todo"
            onClick={() => {
              this.setState({ view: "toDoTasks" });
            }}
          >
            To-Do Tasks
          </button>
          <button
            id="addnew"
            onClick={() => {
              this.setState({ view: "newTasks" });
            }}
          >
            Add New Task
          </button>
          <button
            id="finished"
            onClick={() => {
              this.setState({ view: "finishedTasks" });
            }}
          >
            Completed Tasks
          </button>
        </nav>
        {this.state.view === "toDoTasks" ? <ToDoList /> : null}
        {this.state.view === "newTasks" && (
          <NewTask changeView={this.changeView} />
        )}
        {this.state.view === "finishedTasks" ? <FinishedList /> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
