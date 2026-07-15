import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link className="navbar-brand" to="/viewall">
          Blog App
        </Link>

        <div className="navbar-nav me-auto">

          <Link className="nav-link" to="/create">
            Create Post
          </Link>

          <Link className="nav-link" to="/viewall">
            View All Posts
          </Link>

          <Link className="nav-link" to="/viewmyposts">
            View My Posts
          </Link>

        </div>

        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;