import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    listItems: [
      {
        id: 1,
        topic: "Do the dishes",
        content: "Do the dishes and then rest",
        done: false
      },
      {
        id: 2,
        topic: "Do the chores",
        content: "Do the chores and then rest",
        done: false
      },
      {
        id: 3,
        topic: "Do the homework",
        content: "Do the homework and then rest",
        done: false
      }
    ]
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
