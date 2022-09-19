import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
// import axios from "axios";
import data from "../data/data";

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

  return (
    <div className="lists-container">
      {data.map((note) => (
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
                  onClick={() => deleteTitle(note._id)}
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
              <Card.Text>{note.content}</Card.Text>
            </Card.Body>
          </Card>
          <br />
        </div>
      ))}
    </div>
  );
}
