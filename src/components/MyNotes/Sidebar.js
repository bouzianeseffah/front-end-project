// DEPENDENCIES
import React, { useState, useEffect } from "react";
import { Alert, Button, Offcanvas } from "react-bootstrap";
import { nanoid } from "nanoid";
import axios from "axios";
import "./MyNotes.css";

// image
import ArrowRight from "../../images/arrow-right.svg";

function Sidebar(props) {
  // stores the data from the url
  const [notes, setNotes] = useState([]);

  // VARIABLES
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [createdTitle, setCreatedTitle] = useState("");
  const [allTitles, setAllTitles] = useState({
    title: "",
    description: "",
    id: "",
    key: "",
  });
  const [showEdit, setShowEdit] = useState(false);

  const addTitle = (e) => {
    e.preventDefault();
    // creates new folder name
    const newTitle = {
      title: createdTitle,
      key: nanoid(),
      id: nanoid(),
    };
    setAllTitles((prevAllTitles) => [newTitle, ...prevAllTitles]);
    // Clears input when entered
    setCreatedTitle((prevTitle) => (prevTitle = ""));
  };

  // deletes current folder name
  function deleteTitle(id) {
    setAllTitles((prevAllTitles) =>
      prevAllTitles.filter((note) => note.id !== id)
    );
    // console.log('value of id:', allTitles[0].id)
  }

  // Edits current folder name
  function editTitle(event) {
    // console.log(inputName2())
    setShowEdit((prevShowEdit) => (prevShowEdit === false ? true : false));
    if (showEdit === false) {
      console.log("editing", event, showEdit);
    } else {
      console.log("edited", event, showEdit);
      return allTitles;
    }
  }

  // sets title name from input
  const inputName = (event) => {
    setCreatedTitle(event.target.value);
    // console.log('value is:', event.target.value);
  };

  // iterates over our array and shows it in the browser
  const folderElements = allTitles.map((note) => (
    <div key={note.key}>
      <p id={note.id}>
        {/* {note.title}  */}
        {showEdit === false ? (
          note.title
        ) : (
          <input
            type="text"
            // onChange={inputName2}
            placeholder={note.title}
            maxLength="15"
          />
        )}

        <button
          type="button"
          className="sidebar-delete-buttons"
          onClick={() => deleteTitle(note.id)}
        >
          Delete
        </button>

        {!showEdit ? (
          <button
            type="button"
            className="sidebar-edit-buttons"
            onClick={() => editTitle(note.title)}
          >
            Edit
          </button>
        ) : (
          <button
            type="button"
            className="sidebar-edit-buttons green"
            onClick={() => editTitle(note.title)}
          >
            Confirm
          </button>
        )}
      </p>
    </div>
  ));

  return (
    <div className="sidebar">
      <Button className="d-lg-none sidebar-popout-button" onClick={handleShow}>
        <img src={ArrowRight} alt="right arrow" width="20rem" height="20rem" />
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        NOTES
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notes</Offcanvas.Title>
        </Offcanvas.Header>

        <div className="folder-container">
          <form>
            <input
              type="text"
              value={createdTitle}
              onChange={inputName}
              maxLength="15"
            />
            <button
              type="button"
              className="add-folder-title"
              onClick={addTitle}
            >
              Add
            </button>
          </form>
          <br />

          {folderElements}
        </div>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
