import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ITEM":
      return {
        ...state,
        listItems: state.listItems.filter(
          listItems => listItems.id !== action.payload
        )
      };
    default:
      return state;
  }
};

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
    ],
    dispatch: action => this.setState(state => reducer(state, action))
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
