import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg"
import "./style.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-wrapper black">
          <Link className="brand-logo right" to="/">
            <img src={logo} className="App-logo" alt="logo"/>
          </Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li className="nav-item">
              <Link
                to="/"
                className={
                  window.location.pathname === "/"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/calendar"
                className={
                  window.location.pathname === "/calendar"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Calendar
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className={
                  window.location.pathname === "/signup"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
