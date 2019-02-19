import React, { Component } from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class AllTasks extends Component {
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
    return this.state.tasks.map(function(object, i) {
        return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return(
      <div className="table table-sm">
        <h1>Task List</h1>
          <table className="" id="myTable">
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
    )
  }
}
