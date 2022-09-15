import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {nanoid} from 'nanoid'
import { Fragment } from 'react';
// image
import ArrowRight from '../images/arrow-right.svg'

function Sidebar(props) {
  const { onCreate } = props
     
    const [book, setBook] = useState({
        title: "",
        description: "",
        done: false
    })
 
    const onChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }
 
    const saveTodo = (e) => {
        e.preventDefault()
        onCreate(book)
    }
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
    <Fragment>
      <div className='sidebar'>
      <Button className="d-lg-none sidebar-popout-button" onClick={handleShow}>
        <img src={ArrowRight} width='20rem' height='20rem' />
      </Button>

      <Alert variant="info" className="d-none d-lg-block">
        NOTES
      </Alert>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-center m-3">Notes</Offcanvas.Title>
        </Offcanvas.Header>

        <div className='folder-container'>
          <form onSubmit={ saveTodo}>
               <div className="col-3 m-1">
                  <input className="form-control"
                    type='text'
                    placeholder='Title'
                    name='title'
                    onChange={(e) => onChange(e) }
                    maxLength='15'
                  />
               </div>
               <div className="col-5 d-flex justify-content-center m-1"> 
                  <input className="form-control"
                    type='text'
                    name='description'
                    onChange={(e) => onChange(e) }
                    maxLength='15'
                  />
               </div>
         
        
          <button  className='btn btn-primary col-2 d-flex justify-content-center m-1'type='submit'>Add</button>
          </form>
          <br/>

         

        </div>

      </Offcanvas>
    </div>
    </Fragment>
    
  );
}

export default Sidebar;