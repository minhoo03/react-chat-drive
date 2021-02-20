import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from '../../../firebase'

import { AiOutlineSmile } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'

import { Button, Modal, Form } from 'react-bootstrap'

export class ChatRooms extends Component {


    state = { 
        show: false,
        name: '',
        description: '',
        chatRoomsRef: firebase.database().ref('chatRooms'),
        chatRooms: []
    }


    componentDidMount() {
        this.addChatRoomsListeners()
    }


    addChatRoomsListeners = () => {
        let chatRoomsArray = []

        this.state.chatRoomsRef.on("child_added", DataSnapshot => {
            chatRoomsArray.push(DataSnapshot.val())

            this.setState({chatRooms: chatRoomsArray})
        } )
    }


    handleClose = () => this.setState({show: false})
    handleShow = () => this.setState({show: true})


    handleSubmit = (e) => {
        e.preventDefault()

        const { name, description } = this.state

        if (this.isFormValid(name, description)) {
            this.addChatRoom()
        }
    }


    isFormValid = (name, description) => {
        return name && description
    }


    addChatRoom = async () => {

        const key = this.state.chatRoomsRef.push().key
        const { name, description } = this.state
        const { user } = this.props

        // Created Obj
        const newChatRoom = {
            id: key,
            name,
            description,
            createdBy: {
                name: user.displayName,
                image: user.photoURL
            }
        }

        // Send DB
        try {
            await this.state.chatRoomsRef.child(key).update(newChatRoom)

            this.setState({
                name: '',
                description: '',
                show: false
            })

        } catch (error) {
            alert(error)
        }
    }


    renderChatRooms = (chatRooms) => {
        return chatRooms.length > 0 &&
        chatRooms.map(room => {
            return <li># {room.name}</li>
        })
    }


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


                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {this.renderChatRooms(this.state.chatRooms)}
                </ul>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a chat room</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter a chat room name"
                                    onChange={ (e) => this.setState({name: e.target.value})}
                                />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter a chat room description"
                                    onChange={ (e) => this.setState({description: e.target.value})}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>

                        <Button variant="primary" onClick={this.handleSubmit}>
                            Create
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            
        )
    }
}

const mapToStateProps = state => {
    return {
        user: state.user.currentUser
    }
}
export default connect(mapToStateProps)(ChatRooms)
