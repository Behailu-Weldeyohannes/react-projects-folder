import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <img
          className="nav--icon"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
          alt="react-logo"
        />
        <h3 className="nav--logo_text">JS Facts</h3>
        <h4 className="nav--title">Javascript Course - Project 01</h4>
      </nav>
    </header>
  );
};

export default Header;
