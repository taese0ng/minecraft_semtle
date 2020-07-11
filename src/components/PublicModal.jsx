import React from 'react';
import {Modal, Button} from 'react-bootstrap';

function PublicModal(props){
    return(
        <Modal show={props.show} onHide={props.close}>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {props.body}
            </Modal.Body>
            
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>닫기</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PublicModal;