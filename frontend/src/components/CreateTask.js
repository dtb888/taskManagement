import React, { Component } from 'react';

export default class Create extends Component {
	state = {tasks: []}

  componentDidMount() {
    fetch('/createtask')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }
  
    render() {
        return (
            <div class="addTask">
            <h2>Add a Task</h2>
            <form method="post">
              <input type="input" name="title" placeholder="title"/>
              <input type="input" name="content" placeholder="content"/>
              <input type="input" name="deadline" placeholder="deadline "/>
              <input type="input" name="owner" placeholder="owner"/>
              <input type="input" name="createdBy" placeholder="createdBy"/>
              <input type="input" name="complete" placeholder="complete"/>
              <input type="submit" value="Add Task" className="btn btn-primary"/>
            </form>
          </div>
        )
    }
}