import Sidebar from "./components/Sidebar";
import Lists from "./components/Lists";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  BrowserRouter,
} from "react-router-dom";

import React from "react";

const MyNotes = () => {
  return (
    <div className="content-container">
      <Sidebar />
      <Lists />
    </div>
  );
};

export default MyNotes;
