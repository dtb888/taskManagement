import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Create from './components/CreateTask';
import Edit from './components/EditTask';
import Delete from './components/DeleteTask';
import Assign from './components/AssignTask';
import Complete from './components/MarkComplete'
import TableRow from './components/TableRow';

class App extends Component {
  

  constructor(props) {
      super(props);
      this.state = {tasks: []}
  }

  componentDidMount(){
      axios.get('/task')
        .then(response => {
          this.setState({ tasks: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
  }

  tabRow(){
      return this.state.tasks.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
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
                    <Link to={'/create'} className="nav-link">Create New Task</Link>
                  </li>
                </ul>
              </div>
            </nav> <br/>
            <Switch>
                <Route exact path='/create' component={ Create } />
                <Route path='/edit/:id' component={ Edit } />
                <Route path='/delete/:id' component= { Delete } />
                <Route path='/assign/:id' component={ Assign } />
                <Route path='/complete/:id' component={ Complete } />
            </Switch>
          
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
                    {this.tabRow()}
                  </tbody>
                </table>
            </div>
          </div>
        </Router>


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

      </div>
    );
  }
}

export default App;
