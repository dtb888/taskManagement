import React, { Component } from 'react';

export default class Edit extends Component {
  
    render() {
        return (
            <div className="editTask">
            <h2>Edit a Task</h2>
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