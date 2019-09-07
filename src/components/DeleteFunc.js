import React, { Component, useState } from 'react';
import axios from '../axios';
import { Modal, Button } from 'react-bootstrap';

class DeleteFunc extends Component {
    render() {
        const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
            const handleDelete = () => {
                this._deleteProd();
                setShow(false);
            }
          
            return (
              <>
                <Button variant="primary" onClick={handleShow}>
                  Delete
                </Button>
          
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Verify</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Are you sure you wish to delete this item?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      No
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                      Yes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            );
    }
}

export default DeleteFunc;