// DEPENDENCIES
import React from 'react';
import {useState} from 'react';

import  ReactDOM  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import Nav from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Lists from "./components/Lists";


function App() {


  return (
      <div className="App" >
        <Nav 

        />
        <div className="content-container">
          <Sidebar />
          <Lists />
        </div>
        </div>
  );
}

export default App;
