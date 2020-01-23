import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  const { branding } = props;
  return (
    <nav className="row navbar navbar-expand-sm nabar-dark mb-3 py-3 bg-dark text-white">
      <h1>{branding}</h1>
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
