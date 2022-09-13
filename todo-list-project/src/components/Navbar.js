import React,{useState} from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/Docket.png'
//New
import {createContext} from "react";
// import { BrowserRouter ,Link, Route  } from "react-router-dom";
import ReactSwitch  from "react-switch";
//Theme API
const ThemeContext = createContext('null')

function Nav() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}> 
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
            {/* Light dark mode button */}
          <Navbar.Brand href="#home" id={theme}>
            <label>{theme === "light"? "light mode": "dark mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
            <div className="switch"> 

            </div>


            </Navbar.Brand>
          </Container>
        </Navbar>
         </div>
    </ThemeContext.Provider>

  );
}

export default Nav;