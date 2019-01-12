import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.content}
          </td>
          <td>
            {this.props.obj.deadline}
          </td>
          <td>
            {this.props.obj.owner}
          </td>
          <td>
            {this.props.obj.createdBy}
          </td>
          <td>
            {this.props.obj.complete}
          </td>
          <td>
            <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
            <Link to={"/delete/"+this.props.obj._id} className="btn btn-danger">Delete</Link>
          </td>
          <td>
            <Link to={"/assign/"+this.props.obj._id} className="btn btn-warning">Assign</Link>
          </td>
          <td>
            <Link to={"/complete/"+this.props.obj._id} className="btn btn-success">Complete</Link>
          </td>
        </tr>
    );
  }
}

export default TableRow;