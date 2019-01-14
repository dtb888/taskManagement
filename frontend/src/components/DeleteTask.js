import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
      super(props);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangeContent = this.onChangeContent.bind(this);
      this.onChangeDeadline = this.onChangeDeadline.bind(this);
      this.onChangeOwner = this.onChangeOwner.bind(this);
      this.onChangeCreatedBy = this.onChangeCreatedBy.bind(this);
      this.onChangeComplete = this.onChangeComplete.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          title: '',
          content: '',
          deadline:'',
          owner: '',
          createdBy: '',
          complete: ''
      }
  }

 componentDidMount() {
    axios.get('/edit/'+this.props.match.params.id)
        .then(response => {
            this.setState({ 
              title: response.data.title, 
              content: response.data.content,
              deadline: response.data.deadline,
              owner: response.data.owner,
              createdBy: response.data.createdBy,
              complete: response.data.complete });
        })
        .catch(function (error) {
            console.log(error);
        })
  }


  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeContent(e) {
    this.setState({
      content: e.target.value
    })  
  }
  onChangeDeadline(e) {
    this.setState({
      deadline: e.target.value
    })
  }
  onChangeOwner(e) {
    this.setState({
      owner: e.target.value
    })
  }
  onChangeCreatedBy(e) {
    this.setState({
      createdBy: e.target.value
    })
  }
  onChangeComplete(e) {
    this.setState({
      complete: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

   

    axios.get('/delete/'+this.props.match.params.id)
        .then(console.log('Deleted'))
        .then(window.location.reload());

    this.props.history.push('/task');

  }
 

  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Delete Task?</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Title:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        />
                  </div>
                  <div className="form-group">
                      <label>Content: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.content}
                        onChange={this.onChangeContent}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Confirm Delete" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}