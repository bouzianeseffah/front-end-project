// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// COMPONENTS
import Nav from "./components/Header/Navbar";
import LandingPage from "./views/LandingPage/LandingPage";
import MyNotes from "./views/MyNotes";
import Footer from "./components/Footer/Footer";
import {
  postTodosAPI,
  getTodosAPI,
  patchTodosAPI,
  deleteTodosAPI,
} from "./api/api";

function App() {
  const [todos, setTodos] = useState([]);
  //useEffect on getTodosApi to get data and display it on lists.js
  useEffect(() => {
    getTodosAPI().then((todos) => setTodos(todos));
  }, []);
  //add a new list
  const addTodo = (todo) => {
    postTodosAPI(todo).then((data) => {
      setTodos([...todos, data]);
    });
  };
  // updateTodo function that invoke the back-end and update the data
  //we  refresh the data  by invoking setTodos function
  const updateTodo = (id, done) => {
    patchTodosAPI(id, done ? false : true).then((data) => {
      if (data) {
        console.log("updat records");
        getTodosAPI().then((todos) => setTodos(todos));
      }
    });
  };
  //deleteTodo function to delete data
  const deleteTodo = (id) => {
    deleteTodosAPI(id).then((data) => {
      if (data.deletedCount === 1) {
        setTodos(todos.filter((todo) => todo._id !== id));
      }
    });
  };

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
