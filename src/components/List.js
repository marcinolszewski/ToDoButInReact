import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor() {
    super();
    this.state = {
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
  }
  render() {
    const { listItems } = this.state;
    return (
      <div>
        <ul>
          {listItems.map(listItem => (
            <ListItem key={listItem.id} listItem={listItem} />
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
