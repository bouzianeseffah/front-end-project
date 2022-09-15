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
            <label>{theme === "light"? "light mode": "dark mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "darklight"}/>
        </div>
        <div className="content-container">
          <Sidebar />
          <Lists />
        </div>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
