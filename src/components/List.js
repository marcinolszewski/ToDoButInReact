import React, { Component } from "react";
import ListItem from "./ListItem";
import { Consumer } from "../context";

class List extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { listItems } = value;
          return (
            <ul className="list-group">
              {listItems.map(listItem => (
                <ListItem key={listItem.id} listItem={listItem} />
              ))}
            </ul>
          );
        }}
      </Consumer>
    );
  }
}

export default List;
