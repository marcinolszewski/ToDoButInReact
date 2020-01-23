import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
  render() {
    const { topic, content } = this.props.listItem;
    const { showTask } = this.state;
    return (
      <li className="list-group-item">
        <h3 onClick={this.showContent} style={{ cursor: "pointer" }}>
          {topic}
          <FontAwesomeIcon icon={faEdit} size="xs" pull="right" />
          <FontAwesomeIcon icon={faTrashAlt} size="xs" pull="right" />
        </h3>
        {showTask ? <span>{content}</span> : null}
      </li>
    );
  }
}

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired
};

export default ListItem;
