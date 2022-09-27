import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/Docket.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <Navbar style={{ backgroundColor: "#1e1e1e" }}>
        <Container style={{ justifyContent: "space-around" }}>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="/" className="navbar-text-style">
              Docket <span className="copyright"> &copy; 2022</span>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
