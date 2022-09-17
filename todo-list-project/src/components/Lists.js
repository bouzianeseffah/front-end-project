import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";

export default function Lists() {
  // const [notes, setNotes] = useState([]);

  // const fetchNotes = async () => {
  //   const data = await axios.get("http://localhost:8080/");
  //   setNotes(data);
  // };

  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  return (
    <div className="lists-container">
      <Card border="info" className="list-card">
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body>
          <Card.Title>Info Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card border="info" className="list-card">
        <Card.Body>
          <Card.Title>Info Card Title 2</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
