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
        <Offcanvas.Body >
          <p className="mb-0">
            This is content within a container.
          </p>
        </Offcanvas.Body>
        <Offcanvas.Body>
          <p className="mb-0">
            This is content within a container 3.
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;