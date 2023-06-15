import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="studentProjectLibraryHeader">
      <h1 className="studentProjectLibraryHeaderH1">projects</h1>
      <p className="studentProjectLibraryHeaderP">
        Welcome to the project library. You can use the filters on the right to
        help you search from specific projects.
      </p>
    </div>
  );
}

export default Header;
