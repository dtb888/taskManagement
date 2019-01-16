import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import AllTasks from './components/AllTasks';
import Create from './components/CreateTask';
import Edit from './components/EditTask';
import Delete from './components/DeleteTask';
import Assign from './components/AssignTask';
import Complete from './components/MarkComplete';
import Completed from './components/CompletedTasks';
import Uncompleted from './components/UncompletedTasks';
import Deadline from './components/DeadlineTasks';
import Overdue from './components/OverdueTasks';

import TableRow from './components/TableRow';

class App extends Component {
  

  constructor(props) {
      super(props);
      this.state = {tasks: []}
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
          <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
          <span> <strong> Welcome: </strong> </span> <span id="givenName" ></span>
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
                <Route exact path='/' component={ AllTasks} />
                <Route exact path='/create' component={ Create } />
                <Route path='/edit/:id' component={ Edit } />
                <Route path='/delete/:id' component= { Delete } />
                <Route path='/assign/:id' component={ Assign } />
                <Route path='/complete/:id' component={ Complete } />
                <Route exact path='/completed' component={ Completed } />
                <Route exact path='/uncompleted' component={ Uncompleted } />
                <Route exact path='/deadline' component={ Deadline } />
                <Route exact path='/overdue' component={ Overdue } />
            </Switch>
          
          </div>
        </Router>


          <br/>

          <div className='navbar-collapse'>
            <a href="/" id="all" className='btn btn-dark' style={{margin: 1 +'em'}}>All</a>
            <a href="/completed" id="completed" className='btn btn-dark' style={{margin: 1 +'em'}}>Completed Tasks</a>
            <a href="/uncompleted" id="uncompleted" className='btn btn-dark' style={{margin: 1 +'em'}}>Uncompleted Tasks</a>
            <a href="/deadline" id="deadline" className='btn btn-dark' style={{margin: 1 +'em'}}>Deadline</a>
            <a href="/overdue" id="overdue" className='btn btn-dark' style={{margin: 1 +'em'}}>Overdue</a>
          </div>

        </main>

      </div>
    );
  }
}

export default App;
