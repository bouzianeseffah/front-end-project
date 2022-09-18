// DEPENDENCIES
import { BrowserRouter, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Nav from "./components/Header/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import MyNotes from "./views/MyNotes";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/mynotes">
          <Lists />
        </Route>
      </Switch> */}
      <Route path="/" component={LandingPage} exact />
      <Route path="/mynotes" component={MyNotes} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
