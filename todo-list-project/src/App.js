// DEPENDENCIES
import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// COMPONENTS
import Nav from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Lists from "./components/Lists";
import { postTodosAPI, getTodosAPI } from "./api/Api";

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    getTodosAPI().then(todos => setTodos(todos))
  },[])
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
        <Lists todos = {todos} />
      </div>
  
   

    </div>
  );
}

export default App;
