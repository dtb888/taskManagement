import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import Create from './components/CreateTask';
import Edit from './components/EditTask';

class App extends Component {
  state = {tasks: []}

  componentDidMount() {
    fetch('/task')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }


  render() {
    return (
      <div className="App">

        <header>
          <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
          <span> <strong> Welcome: </strong> </span> <span id="givenName"></span>
        </header>

        <main>

        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">Task Management App</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/createtask'} className="nav-link">Create new task</Link>
                  </li>
                </ul>
              </div>
            </nav> <br/>
            <Switch>
                <Route exact path='/createtask' component={ Create } />
                <Route path='/edit/:id' component={ Edit } />
            </Switch>
          </div>
        </Router>

          <div className="taskList">
            <h1>Task List</h1>
              <table class="" id="myTable">
                <thead>
                  <tr className="tableHeader">
                    <td>Title</td>
                    <td>Content</td><td>Deadline</td>
                    <td>Owner</td><td>Created By</td>
                    <td>Complete</td>
                  </tr>
                </thead>

                <tbody>
                {this.state.tasks.map(task =>          
                  <tr key={task._id}>
                    <td>{task.title}</td>
                    <td>{task.content}</td>
                    <td>{task.deadline}</td>
                    <td>{task.owner}</td>
                    <td>{task.createdBy}</td>
                    <td>{task.complete}</td>
                    <td>
                      <button className="btn btn-primary">Edit</button>
                    </td>
                    <td>
                      <button className="btn btn-danger" id="deleteTask">Delete</button>
                    </td>
                    <td>
                      <button className="btn btn-warning">Assign</button>
                    </td>
                    <td>
                      <button className="btn btn-success">Complete</button>
                    </td>
                  </tr>
                )}
                </tbody>
              </table>
          </div>

          <br/><br/>

          <p> Filter tasks by:</p>

          <a href="#" id="all">All</a>
          <span>    </span>
          <a href="#" id="completed">Completed Tasks</a>
          <span>    </span>
          <a href="#" id="uncompleted">Uncompleted Tasks</a>
          <span>    </span>
          <span>Deadline Filter:  </span> 
          <input type="input" id="deadlineText" onkeyup="filterDeadline()" placeholder="ccyy-MM-dd"/>
          <span>    </span>
          <a href="#" id="overdue">Overdue</a>
          <span>    </span>
          <a href="#" id="completedLastMonth">Completed within the Last Month</a>


        </main>

        <script>
          document.getElementById('deleteTask').addEventListener("click", )
        </script>
      </div>
    );
  }
}

export default App;
