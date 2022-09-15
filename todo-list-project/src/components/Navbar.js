import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/Docket.png'

function Nav() {
  return (
      <div className="Nav">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Docket
            </Navbar.Brand>
            <Navbar.Brand >
              Welcome, name
              <form>
                <label>
                  <input type="text" placeholder="your name"/>
                </label>
              </form>
            </Navbar.Brand>
          <Navbar.Brand href="#home" >
          </Navbar.Brand>
          </Container>
        </Navbar>
         </div>

  );
}

export default Nav;