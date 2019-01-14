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

    const obj = {
      title: this.state.title,
      content: this.state.content,
      deadline: this.state.deadline,
      owner: this.state.owner,
      createdBy: this.state.createdBy,
      complete: this.state.complete
    };

    axios.post('/edit/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data))
        .then(window.location.reload());

    this.props.history.push('/task');

  }
 

  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Edit Existing Task</h3>
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
                      <label>Deadline: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.deadline}
                        onChange={this.onChangeDeadline}
                        />
                  </div>
                  <div className="form-group">
                      <label>Owner: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.owner}
                        onChange={this.onChangeOwner}
                        />
                  </div>
                  <div className="form-group">
                      <label>Created By: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.createdBy}
                        onChange={this.onChangeCreatedBy}
                        />
                  </div>
                  <div className="form-group">
                      <label>Complete: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.complete}
                        onChange={this.onChangeComplete}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Edit Task" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}