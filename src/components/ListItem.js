import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class ListItem extends Component {
  state = {
    showTask: false
  };

  showContent = () => {
    this.setState({
      showTask: !this.state.showTask
    });
  };

  deleteItem = (id, dispatch) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  render() {
    const { id, topic, content } = this.props.listItem;
    const { showTask } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  onClick={this.deleteItem.bind(this, id, dispatch)}
                />
              </a>
              {showTask ? <p>{content}</p> : null}
            </li>
          );
        }}
      </Consumer>
    );
  }
}

ListItem.propTypes = {
  listItem: PropTypes.object.isRequired
};

export default ListItem;
