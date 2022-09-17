// DEPENDENCIES
import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// COMPONENTS
import Nav from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Lists from "./components/Lists";
import { postTodosAPI, getTodosAPI, patchTodosAPI, deleteTodosAPI } from "./api/Api";

function App() {
  const [todos, setTodos] = useState([])
  //useEffect on getTodosApi to get data and display it on lists.js  
  useEffect(() => {
    getTodosAPI().then(todos => setTodos(todos))
  },[])
  //add a new list
  const addTodo = (todo) => {
    postTodosAPI(todo).then(data => {
      setTodos([...todos, data])
    })
  }
// updateTodo function that invoke the back-end and update the data
//we  refresh the data  by invoking setTodos function
const updateTodo = (id, done) =>{
 patchTodosAPI(id, 
  (done) ? false : true).then(data => {
    if(data) {
      console.log('updat records')
      getTodosAPI().then(todos => setTodos(todos))
    }
  })
  
}
//deleteTodo function to delete data
const deleteTodo = (id) => {
   deleteTodosAPI(id).then(data => {
    if(data.deletedCount === 1) {
      setTodos(todos.filter(todo =>
         todo._id !== id))
    }
   })
}

  return (
    
    <div className="App">
      
      <Nav  />
      <div className="content-container">
        <Sidebar onCreate= {addTodo} />
        <Lists todos = {todos}
        onUpdate={updateTodo}
        onDelete= {deleteTodo}
        />
      </div>
  
   

    </div>
  );
}

export default App;
