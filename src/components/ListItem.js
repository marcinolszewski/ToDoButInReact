import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    const { topic, content } = this.props.listItem;
    return (
      <li>
        <h3>{topic}</h3>
        <span>{content}</span>
      </li>
    );
  }
}

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired
};

export default ListItem;
