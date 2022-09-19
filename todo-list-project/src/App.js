// DEPENDENCIES
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
