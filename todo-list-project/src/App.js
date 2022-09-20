// DEPENDENCIES
import React from 'react';
import {useState} from 'react';
import  ReactDOM  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import Nav from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Lists from "./components/Lists";
// New
import {createContext} from "react";
import ReactSwitch  from "react-switch";
//Create Theme API
export const ThemeContext = createContext('null')

function App() {
    const [theme, setTheme] = useState("light");
  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}> 
      <div className="App" id={theme} >
        <Nav 
        />
        <div className="switch"> 
            <label>{theme === "light"? "Light Mode": "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        <div className="content-container">
          <Sidebar />
          <Lists />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Nav from "./components/Header/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import MyNotes from "./views/MyNotes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<LandingPage />}></Route>
        <Route path="/mynotes" element={<MyNotes />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
