import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    topic: "",
    todo: ""
  };
  render() {
    return (
      <React.Fragment>
        <p className="text-center lead">Add new Todo to list</p>
        <form className="mb-3">
          <div className="form-group">
            <label htmlFor="topic">Topic:</label>
            <input
              type="text"
              name="topic"
              className="form-control fonr-control-lg"
              placeholder="Enter Todo topic..."
              value={this.state.topic}
            />
          </div>
          <div className="form-group">
            <label htmlFor="todo">Todo:</label>
            <input
              type="text"
              name="doto"
              className="form-control fonr-control-lg"
              placeholder="Enter Todo..."
              value={this.state.todo}
            />
          </div>
          <input
            type="submit"
            value="Add Todo"
            className="btn btn-success btn-block "
          />
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodo;
