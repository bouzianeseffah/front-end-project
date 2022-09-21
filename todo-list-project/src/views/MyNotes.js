import React from "react";
import {useState} from 'react';
import Sidebar from "../components/MyNotes/Sidebar";
import Lists from "../components/MyNotes/Lists";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const MyNotes = () => {

  return (
      <div className="content-container" >
        <Sidebar />
        <Lists />
      </div>

  );
};

export default MyNotes;
