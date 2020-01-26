import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

class ListItem extends Component {
  state = {
    showTask: false
  };

  showContent = () => {
    this.setState({
      showTask: !this.state.showTask
    });
  };

  deleteItem = () => {
    this.props.onDeleteClickHandler();
  };
  render() {
    const { topic, content } = this.props.listItem;
    const { showTask } = this.state;
    return (
      <li className="list-group-item">
        <span
          onClick={this.showContent}
          style={{ cursor: "pointer", fontWeight: "700" }}
        >
          <FontAwesomeIcon
            icon={faArrowDown}
            size="xs"
            pull="left"
            className="mr-2 mt-1"
          />
          {topic}
        </span>
        <a className="text-info">
          <FontAwesomeIcon
            icon={faEdit}
            size="xs"
            pull="right"
            className="mt-1"
          />
        </a>
        <a className="text-danger">
          <FontAwesomeIcon
            icon={faTrashAlt}
            size="xs"
            pull="right"
            className="mt-1"
            onClick={this.deleteItem}
          />
        </a>
        {showTask ? <p>{content}</p> : null}
      </li>
    );
  }
}

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired,
  onDeleteClickHandler: PropTypes.func.isRequired
};

export default ListItem;
