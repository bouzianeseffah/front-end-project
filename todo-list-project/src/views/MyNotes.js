import Sidebar from "../components/MyNotes/Sidebar2";
import Lists from "../components/MyNotes/Lists2";
import React, { useState, useEffect } from "react";
import {
  postTodosAPI,
  getTodosAPI,
  patchTodosAPI,
  deleteTodosAPI,
} from "../api/api";

const MyNotes = () => {
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
    <div className="content-container">
      <Sidebar onCreate={addTodo} />
      <Lists todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </div>
  );
};

export default MyNotes;
