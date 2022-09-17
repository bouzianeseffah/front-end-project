// DEPENDENCIES
import { BrowserRouter, Route, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Nav from "./components/Navbar";
import LandingPage from "./components/LandingPage/LandingPage";
// import MyNotes from "./components/MyNotes/MyNotes";
// import Sidebar from "./components/Sidebar";
import Lists from "./components/Lists";

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
      <Route path="/mynotes" component={Lists} />
      <Link to="/newnote">Lists</Link>
    </BrowserRouter>
  );
}

export default App;
