import React from "react";

function Header() {
  return (
    <div className="header-container">
      <div className="logo-wrapper">
        <h1>Travelize</h1>
        <span>My traveling experiences</span>
      </div>
      <div className="header-nav-group">
        <div className="header-nav">
          <a href="#home">Home</a>
          <a href="#blog">Blog</a>
        </div>
        <button className="header-btn ">about</button>
      </div>
    </div>
  );
}

export default Header;
