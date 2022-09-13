import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// image
import ArrowRight from '../images/arrow-right.svg'

function Sidebar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [title, setTitle] = useState('')
  const [allTitles, setAllTitles] = useState(['Note 1'])
  
  const handleClick = (e) => {
    e.preventDefault()
    // Clears input when entered
    console.log(title)
    setTitle(prevTitle => prevTitle = '')

    // add notes button
    setAllTitles(prevAllTitles => [title, ...allTitles])
    console.log(allTitles)
  }

  // deletes current Folder
  const deleteClick = () => {
    // setAllTitles([...title].filter(currentId => currentId.id !== id))
    console.log(allTitles.id)
  }



  const inputName = (event) => {
    setTitle(event.target.value);
  }
  
  const folderElements = allTitles.map((note, index) => (
    <>
      <p>
        {note} 
        {/* {index + 1} */}
        <button className='sidebar-delete-buttons' onClick={deleteClick}>
          Delete
        </button>
        <button className='sidebar-edit-buttons'>
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
            value={title}
            onChange={inputName}
            maxLength='15'
          />
          <button 
            type='button'
            className='add-folder-title'
            onClick={handleClick}
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