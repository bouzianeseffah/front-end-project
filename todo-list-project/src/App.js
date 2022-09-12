// DEPENDENCIES
import React from 'react';
import {useState} from 'react';
// import Switch from 'react-input-switch';

import  ReactDOM  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import Nav from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Lists from "./Components/Lists";
//New
import {createContext} from "react";
// import { BrowserRouter ,Link, Route  } from "react-router-dom";
import ReactSwitch  from "react-switch";
//Theme API
export const ThemeContext = createContext('null')

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}> 
      <div className="App" id={theme}>
        <ReactSwitch />
        <Nav />
        <div className="content-container">
          <Sidebar />
          <Lists />
        </div>
        </div>
    </ThemeContext.Provider>
  );
}

export default App;
