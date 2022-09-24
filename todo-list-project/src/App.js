// DEPENDENCIES
import React from 'react';
import {useState} from 'react';
import  ReactDOM  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


// COMPONENTS
import Nav from "./components/Header/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import MyNotes from "./views/MyNotes";


// COMPONENTS
import Sidebar from "../src/components/MyNotes/Sidebar"
import Lists from "./components/MyNotes/Lists"
import app from "./App.js"
import Footer from './components/Footer/Footer'
// New
import {createContext} from "react";
import ReactSwitch  from "react-switch";
//Create Theme API
export const ThemeContext = createContext('light')


function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () =>{
    setTheme((curr) =>(curr === "light" ? "dark": "light"));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}> 
      <div className="switch"> 
        <label>{theme === "light"? "Light Mode": "Dark Mode"}</label>
      <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
      </div>
      <div className='App' id={theme}>
        <Router >
          <Nav />
          <Routes >
            <Route path="/" exact element={<LandingPage /> }></Route>
            <Route path="/mynotes" element={<MyNotes />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider> 

  );
}

export default App;
