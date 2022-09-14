import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {nanoid} from 'nanoid'

// image
import ArrowRight from '../images/arrow-right.svg'

function Sidebar(props) {

  // variables
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [createdTitle, setCreatedTitle] = useState('');
  const [title, setTitle] = useState({
    title: '', 
    key: nanoid(), 
    id: nanoid()
  });
  const [allTitles, setAllTitles] = useState([]);

  const addTitle = (e) => {
    e.preventDefault()
    // creates new folder name
    const newTitle = {
      title: createdTitle,
      key: nanoid(),
      id: nanoid()
    }
    setAllTitles((prevAllTitles) => [newTitle, ...prevAllTitles]);
    // Clears input when entered
    setCreatedTitle(prevTitle => prevTitle = '')
  }

    // deletes current folder name
  function deleteTodo(id){
    setAllTitles(prevAllTitles => prevAllTitles.filter(note => note.id !== id));
    // console.log('value of id:', allTitles[0].id)
  } 

  // sets title name from input 
  const inputName = (event) => {
    setCreatedTitle(event.target.value);
    console.log('value is:', event.target.value);
  }
  
  // maps out our array and shows it in the browser
  const folderElements = allTitles.map((note) => (
    <>
      <p key={note.key} id={note.id}>
        {note.title} 
        <button type='button' className='sidebar-delete-buttons' onClick={() => deleteTodo(note.id)}>
          Delete
        </button>
        <button type='button' className='sidebar-edit-buttons'>
          Edit
        </button>
      </p>
    </>
  ))

  return (
    <div className='sidebar'>
      <Button className="d-lg-none sidebar-popout-button" onClick={handleShow}>
        <img src={ArrowRight} width='20rem' height='20rem' />
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        NOTES
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notes</Offcanvas.Title>
        </Offcanvas.Header>

        <div className='folder-container'>
          <form>
          <input
            type='text'
            value={createdTitle}
            onChange={inputName}
            maxLength='15'
          />
          <button 
            type='button'
            className='add-folder-title'
            onClick={addTitle}
          >Add</button>
          </form>
          <br/>

          {folderElements}

        </div>

      </Offcanvas>
    </div>
  );
}

export default Sidebar;