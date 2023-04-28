import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  function menu() {
    var x = document.getElementById("links");
    // var y1 = document.getElementsByClassName('l1');
    // var y2 = document.getElementsByClassName('l2');
    // var y3 = document.getElementsByClassName('l3');
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
      // y1.style.transform = rotate(-45);
    }
  }

  return (
    <>
    <div className="nav">
      <div className="nav-1">
        <span></span>
        <h2>Antra Choubey</h2>
      </div>
      <div className="nav-2">
        <ul type="none">
          <a>
            <Link to="/">
              <li>HOME</li>
            </Link>
          </a>
          <Link to="/resume">
            <li>ABOUT ME</li>
          </Link>
          <Link to="/projects">
            <li>RESEARCH </li>
          </Link>
          <Link to="/awards">
            <li>AWARDS</li>
          </Link>
          <Link to="/publications">
            <li>PUBLICATIONS</li>
          </Link>
          {/* <Link to="/experience">
            <li>EXPERIENCE</li>
          </Link> */}
          <Link to="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </div>
        {/* <div id="links">
        <ul type="none">
          <a>
            <Link to="/">
              <li>HOME</li>
            </Link>
          </a>
          <Link to="/resume">
            <li>ABOUT ME</li>
          </Link>
          <Link to="/projects">
            <li>RESEARCH </li>
          </Link>
          <Link to="/awards">
            <li>AWARDS</li>
          </Link>
          <Link to="/publications">
            <li>PUBLICATIONS</li>
          </Link> */}
        {/* <Link to="/experience">
            <li>EXPERIENCE</li>
          </Link> */}
        {/* <Link to="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </div> */}
        <div className="nav-3" onClick={menu}>
          <div className="l1"></div>
          <div className="l2"></div>
          <div className="l3"></div>
        </div>
    </div>
    <div id="links">
    <ul type="none" onClick={menu}>
          <a>
            <Link to="/">
              <li>HOME</li>
            </Link>
          </a>
          <Link to="/resume">
            <li>ABOUT ME</li>
          </Link>
          <Link to="/projects">
            <li>RESEARCH </li>
          </Link>
          <Link to="/awards">
            <li>AWARDS</li>
          </Link>
          <Link to="/publications">
            <li>PUBLICATIONS</li>
          </Link>
          {/* <Link to="/experience">
            <li>EXPERIENCE</li>
          </Link> */}
          <Link to="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
    </div>
    </>
  );
}

export default Navbar;
