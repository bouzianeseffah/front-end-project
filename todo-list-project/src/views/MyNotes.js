import Sidebar from "../components/MyNotes/Sidebar";
import Lists from "../components/MyNotes/Lists";
import { BrowserRouter, Route } from "react-router-dom";

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
