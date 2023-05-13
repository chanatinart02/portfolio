import "./Header.css";
import { FaHome, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";

function Header() {
  const toggleShow = () => {
    document.getElementById("expand").setAttribute("aria-expanded", false);
    document.getElementById("navbarNav").classList.toggle("show");
  };
  return (
    <header className="sticky-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand w-25" href="#">
              <img className="w-75" src="icons/logo.png" alt="" />
            </a>
            <button
              id="expand"
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon bg-white"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul onClick={toggleShow} className="navbar-nav my-nav-style">
                <li className="nav-item ms-1">
                  <NavLink
                    to="/"
                    exact={true}
                    className="nav-link text-white"
                    activeClassName="active"
                  >
                    <FaHome style={{ marginBottom: "2px" }} /> Home
                  </NavLink>
                </li>
                <li className="nav-item ms-1">
                  <NavLink
                    to="/about"
                    className="nav-link text-white"
                    activeClassName="active"
                  >
                    <FaUser style={{ marginBottom: "2px" }} /> About Me
                  </NavLink>
                </li>

                <li className="nav-item ms-1">
                  <NavLink
                    to="/projects"
                    className="nav-link text-white"
                    activeClassName="active"
                  >
                    <AiOutlineFundProjectionScreen
                      style={{ marginBottom: "2px", marginRight: "2px" }}
                    />
                    Project
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
