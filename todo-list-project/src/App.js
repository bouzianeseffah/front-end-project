// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, ThemeContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Nav from "./components/Header/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import MyNotes from "./views/MyNotes";
import Footer from "./components/Footer/Footer";

function App(props) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <Router>
      <Nav />
      <Routes>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
            <div className="content-container">
              <Route path="/" exact element={<LandingPage />}></Route>
              <Route path="/mynotes" element={<MyNotes />}></Route>
            </div>
          </div>
        </ThemeContext.Provider>
        ;
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

{
  /* <ThemeContext.Provider value={{ theme, toggleTheme }}>
  <div className="App" id={theme}>
    <div className="switch">
          <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
        </div>
    <div className="content-container">
      <Sidebar />
      <Lists />
    </div>
  </div>
</ThemeContext.Provider>; */
}
