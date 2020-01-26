import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="row navbar navbar-expand-sm navbar-dark mb-3 py-3 bg-dark text-white">
      <div className="container">
        <a href="/" className="navbar-brand text-white">
          {branding}
        </a>
        <React.Fragment>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Add
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Logout
              </a>
            </li>
          </ul>
        </React.Fragment>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: "Todo List V1.0.0"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
