import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import './App.css';

import AllTasks from './components/AllTasks';
import SignOut from './components/SignOut';
import Create from './components/CreateTask';
import Edit from './components/EditTask';
import Delete from './components/DeleteTask';
import Assign from './components/AssignTask';
import Complete from './components/MarkComplete';
import Completed from './components/CompletedTasks';
import Uncompleted from './components/UncompletedTasks';
import Deadline from './components/DeadlineTasks';
import Overdue from './components/OverdueTasks';


class App extends Component {
 

  render() {
    return (
      <Router>
      <div className="App">
          <div
            className="g-signin2"
            data-onsuccess="onSignIn"
            data-theme="dark"
          >
          </div>
          <Link to="/signout" id="signOut">Sign Out</Link>
          <br/>
         <header>
          <span>
            {' '}
            <strong> Welcome: </strong>
            {' '}
          </span>
          {' '}
          <span id="givenName" />
        </header>

        <main>
          
            <div className="container">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                  Task Management App
                </Link>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/create" className="nav-link">
                        Create New Task
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              {' '}
              <br />
              <Switch>
                <Route exact path="/" component={AllTasks} />
                <Route exact path="/signout" component={SignOut} />
                <Route exact path="/create" component={Create} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/delete/:id" component={Delete} />
                <Route path="/assign/:id" component={Assign} />
                <Route path="/complete/:id" component={Complete} />
                <Route exact path="/completed" component={Completed} />
                <Route exact path="/uncompleted" component={Uncompleted} />
                <Route exact path="/deadline" component={Deadline} />
                <Route exact path="/overdue" component={Overdue} />
              </Switch>
            </div>
          

          <br />

            <div className="navbar-collapse">
              <Link 
                to="/"
                id="all"
                className="btn btn-dark"
                style={{ margin: `${1}em` }}
              >
                All
              </Link>
              <Link
                to="/completed"
                id="completed"
                className="btn btn-dark"
                style={{ margin: `${1}em` }}
              >
                Completed Tasks
              </Link>
              <Link
                to="/uncompleted"
                id="uncompleted"
                className="btn btn-dark"
                style={{ margin: `${1}em` }}
              >
                Uncompleted Tasks
              </Link>
              <Link
                to="/deadline"
                id="deadline"
                className="btn btn-dark"
                style={{ margin: `${1}em` }}
              >
                Deadline
              </Link>
              <Link
                to="/overdue"
                id="overdue"
                className="btn btn-dark"
                style={{ margin: `${1}em` }}
              >
                Overdue
              </Link>
            </div>
        </main>
      </div>
      </Router>
    );
  }
}

export default App;
