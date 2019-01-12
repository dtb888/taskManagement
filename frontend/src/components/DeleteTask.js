import React, { Component } from 'react';
import axios from 'axios';

export default class Delete extends Component {
  constructor(props) {
      super(props);
  }


  componentDidMount() {
    axios.get('/delete/'+this.props.match.params.id)
        .then(console.log('Deleted'))
        .catch(function (error) {
            console.log(error);
        })
  }
  //make this a proper component, with a render confirm delete. check on cross clicking crud 
  render() {
        return (
          <div class="deleteTask">
           
          </div>
        )
    }

  
}