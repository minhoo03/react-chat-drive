import React, { Component } from 'react'

import { AiOutlineSmile } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'

import { Button, Modal, Form } from 'react-bootstrap'

export class ChatRooms extends Component {


    state = { 
        show: false
    }


    handleClose = () => this.setState({show: false})
    handleShow = () => this.setState({show: true})


    render() {
        return (
            <div>
                <div style={{
                    position:'relative', width:'100%',
                    display:'flex', alignItems:'center'
                }}>

                <AiOutlineSmile style={{marginRight: 3}} />
                    CHAT ROOMS (1)
                    <FaPlus style={{
                        position: 'absolute',
                        right: 0, cursor: 'pointer'
                    }}
                    onClick={this.handleShow}
                    />
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a chat room</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter a chat room name" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter a chat room description" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>

                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            
        )
    }
}

export default ChatRooms
