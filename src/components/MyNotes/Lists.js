import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
// import axios from "axios";
import data from "../data/data";
import "./MyNotes.css";

export default function Lists() {
  // const [notes, setNotes] = useState([]);

  // const fetchNotes = async () => {
  //   const data = await axios.get("http://localhost:8080/");
  //   setNotes(data);
  // };

  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  const [newData, setNewData] = useState(data);
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState(true);
  const [createdTitle, setCreatedTitle] = useState("");
  const [createdDescription, setCreatedDescription] = useState("");

  function editTitle(event) {
    // console.log(inputName2())
    setShowEdit((prevShowEdit) => (prevShowEdit === false ? true : false));
    if (showEdit === false) {
      console.log("editing", event, showEdit);
    } else {
      console.log("edited", event, showEdit);
      // setAllTitles(prevTitles => prevTitles.map(prevTitles => {
      //   return prevTitles.title === title.title
      //   ? {...prevTitles, title: event}
      //   : prevTitles;
      // }))
      // return allTitles;
    }
  }

  // deletes current folder name
  function deleteTitle(id) {
    setNewData((prevData) => prevData.filter((note) => note._id !== id));
    // console.log("value of id:", newData._id);
  }

  // Toggles the add note form
  function showClick(e) {
    e.preventDefault();
    setShow((prevShow) => (prevShow === true ? false : true));
  }

  // Adds the information in the form to the data file.
  function handleSubmit(e) {
    e.preventDefault();
    setShow((prevShow) => (prevShow === true ? false : true));
    // console.log(`the title is: '${createdTitle}' and the description is: '${createdDescription}'`);
    // let allData = { ...(data._id + 1) };
    data.push({
      title: createdTitle,
      description: createdDescription,
      _id: 5,
    });
    setCreatedTitle((prevTitle) => (prevTitle = ""));
    setCreatedDescription((prevDescription) => (prevDescription = ""));
  }

  // sets the state to that value in the form
  const inputTitle = (event) => {
    setCreatedTitle(event.target.value);
    console.log("title is:", event.target.value);
  };
  const inputDescription = (event) => {
    setCreatedDescription(event.target.value);
    console.log("description is:", event.target.value);
  };

  const findLastElementOfId = (arr, id) => {
    return console.log(data.filter((object) => object._id === id).at(-1));
  };
  findLastElementOfId();
  // Delete the note
  function handleDelete(id) {
    console.log(id);
    // data.filter((note) => note._id !== id);
    console.log(findLastElementOfId);
  }

  return (
    <div className="lists-container">
      <div className="header-container">
        <h1 className="folder-heading">Folder 1</h1>
        <button
          className=" new-note"
          id={show ? "show" : "none"}
          onClick={showClick}
        >
          Create New Note
        </button>
      </div>
      <Card border="info" className="list-card">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body id={show ? "none" : "show"}>
          <Card.Title>
            <form>
              <h3>Title</h3>
              <input
                type="text"
                value={createdTitle}
                onChange={inputTitle}
                maxLength="27"
              />
            </form>
          </Card.Title>
          <Card.Text>
            <form>
              <h4>Description</h4>
              <textarea
                type="text"
                value={createdDescription}
                onChange={inputDescription}
              />
              <button
                type="button"
                className="btn-style"
                onClick={handleSubmit}

                // onClick={() => deleteTitle(note._id)}
              >
                Add
              </button>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      {data.map((note) => (
        <>
          <div key={note._id}>
            <Card border="info" className="list-card">
              {/* <Card.Header>Header</Card.Header> */}
              <Card.Body>
                <Card.Title>
                  {note.title}{" "}
                  {/* <h1 style={{ display: "inline", float: "right" }}>Delete</h1> */}
                  <button
                    type="button"
                    className="sidebar-delete-buttons"
                    onClick={() => handleDelete(note._id)}
                  >
                    Delete
                  </button>
                  {!showEdit ? (
                    <button
                      style={{
                        display: "inline",
                        float: "right",
                      }}
                      type="button"
                      className="sidebar-edit-buttons"
                      onClick={() => editTitle(note.title)}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      style={{
                        display: "inline",
                        float: "right",
                      }}
                      type="button"
                      className="sidebar-edit-buttons green"
                      onClick={() => editTitle(note.title)}
                    >
                      Confirm
                    </button>
                  )}
                </Card.Title>
                <Card.Text>{note.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <br />
        </>
      ))}
    </div>
  );
}
