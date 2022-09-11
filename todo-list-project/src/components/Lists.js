import React from "react";
import Card from 'react-bootstrap/Card';


export default function Lists() {
 return (
  <div className="lists-container">
   <Card border="info" className="list-card">
     {/* <Card.Header>Header</Card.Header> */}
     <Card.Body >
       <Card.Title>Info Card Title</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
     </Card.Body>
   </Card>
   <br />
   <Card border="info" className="list-card">
     <Card.Body >
       <Card.Title>Info Card Title 2</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
     </Card.Body>
   </Card>
  </div>
 )
}