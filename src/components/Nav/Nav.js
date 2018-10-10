import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>
      <Link to="/new">
        <button>New Post</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
      </Link>
    </div>
  );
}

export default Nav;

// Create the 'Home', 'New Post', and 'Logout' buttons in the Nav component.
// 'Home' should navigate to the Dashboard view.
// 'New Post' should navigate to the New Post view.
// 'Logout' should navidate to the Auth view.
