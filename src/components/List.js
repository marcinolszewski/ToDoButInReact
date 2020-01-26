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

  deleteItem = id => {
    const { listItems } = this.state;

    const newItems = listItems.filter(item => {
      return item.id !== id;
    });

    this.setState({
      listItems: newItems
    });
  };

  render() {
    const { listItems } = this.state;
    return (
      <ul className="list-group">
        {listItems.map(listItem => (
          <ListItem
            key={listItem.id}
            listItem={listItem}
            onDeleteClickHandler={this.deleteItem.bind(this, listItem.id)}
          />
        ))}
      </ul>
    );
  }
}

export default List;
