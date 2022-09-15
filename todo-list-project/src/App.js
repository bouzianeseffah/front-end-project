// DEPENDENCIES
import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// COMPONENTS
import Nav from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Lists from "./components/Lists";
import { postTodosAPI } from "./api/Api";

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    postTodosAPI(todo).then(data => {
      setTodos([...todos, data])
    })
  }
  return (
    
    <div className="App">
      
      <Nav  />
      <div className="content-container">
        <Sidebar onCreate= {addTodo} />
        <Lists  />
      </div>
  
   

    </div>
  );
}

export default App;
