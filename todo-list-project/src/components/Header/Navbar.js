import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/Docket.png";
import { Link, Router } from "react-router-dom";

function Nav() {
  const [nameInForm, setNameInForm] = useState("");
  const [show, setShow] = useState(true);

  const inputName = (event) => {
    setNameInForm(event.target.value);
  };

  // Show the user names input
  function handleSubmit() {
    setNameInForm((prevName) => (prevName = nameInForm));
    // console.log('Welcome ' + nameInForm)
    setShow((prevShow) => (prevShow === true ? false : true));
    // console.log(show)
  }

  return (
    <div className="Nav">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <Link to="/" className="navbar-text-style">
              Docket
            </Link>
          </Navbar.Brand>

          <Navbar.Brand>
            <form className={show ? "show" : "none"}>
              <input
                type="text"
                id="firstname"
                value={nameInForm}
                placeholder="Add User.."
                className="addName"
                onChange={inputName}
                maxLength="15"
              />
              <button
                type="button"
                className="addName-button"
                onClick={handleSubmit}
                // onMouseDown={handleClose}
              >
                <span role="img" aria-label="check mark">
                  ✔️
                </span>
              </button>
            </form>

            <div className={show ? "none" : "show"}>
              <span className="name">Welcome, {nameInForm} </span>
              <button
                type="button"
                className="addName-button"
                onClick={handleSubmit}
                // onMouseDown={handleShow}
              >
                <span role="img" aria-label="pencil image">
                  ✏️
                </span>
              </button>
            </div>
          </Navbar.Brand>
          <div>
            <Link
              to="/mynotes"
              className="navbar-text-style"
              style={{ margin: "0 10px 0 0" }}
            >
              Notes
            </Link>
            {/* Light dark mode button */}
            <Navbar.Brand>Mode</Navbar.Brand>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nav;
