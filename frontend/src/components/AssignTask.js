import React, { Component } from 'react';

export default class Assign extends Component {
	state = {tasks: []}

  componentDidMount() {
    fetch('/assigntask')
      .then(res => res.json())
      .then(tasks => this.setState({ tasks }));
  }
  
    render() {
        return (
            <div class="assignTask">
           
          </div>
        )
    }
}