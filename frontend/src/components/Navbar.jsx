import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/* <Link class="navbar-brand" to="home"> */}
          {/* <a class="navbar-brand" href="home"> */}
          <h2 className="navbar-brand">Apply</h2>
          {/* </Link> */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active" to="home">
                {/* <a class="nav-link active" aria-current="page" href="#"> */}
                Profile
              </Link>
              <Link class="nav-link" to="blog">
                {/* <a href="#"> */}
                Blog
              </Link>
              <Link class="nav-link" to="applications">
                {" "}
                Applications
              </Link>

              <button onClick={(e) => logout(e)}>Log out</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
