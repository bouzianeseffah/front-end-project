import React, { useState, useEffect, createContext } from "react";
import Sidebar from "../components/MyNotes/Sidebar";
import Lists from "../components/MyNotes/Lists";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "../components/Header/Navbar";

// import ReactSwitch from "react-switch";
export const ThemeContext = createContext("null");

const MyNotes = () => {
  // const [theme, setTheme] = useState("light");
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  return (
    <div className="content-container">
      <Sidebar />
      <Lists />
    </div>

    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
    //   <div className="App" id={theme}>
    //     {/* <div className="switch">
    //       <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
    //     </div> */}
    //     <div className="content-container">
    //       <Sidebar />
    //       <Lists />
    //     </div>
    //   </div>
    // </ThemeContext.Provider>
  );
};

export default MyNotes;

// function App() {
//     const [theme, setTheme] = useState("light");
//   const toggleTheme = () =>{
//     setTheme((curr) => (curr === "light" ? "dark": "light"));
//   };

//   return (

//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       <div className="App" id={theme} >

//         <Nav/>

//         <div className="switch">
//             <label>{theme === "light"? "Light Mode": "Dark Mode"}</label>
//         </div>

//         <div className="content-container">
//           <Sidebar />
//           <Lists />
//         </div>

//         </div>
//       </ThemeContext.Provider>
// )
