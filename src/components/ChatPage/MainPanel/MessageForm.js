import React, { useState } from 'react'
import firebase from '../../../firebase'
import { Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function MessageForm() {

    const chatRoom = useSelector(state => state.chatRoom.currentChatRoom)
    const user = useSelector(state => state.user.currentUser)
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(false)
    const messageRef =  firebase.database().ref('messages') 


    // textarea의 state 관리
    const handleChange = (e) => {
        setContent(e.target.value)
    }

    // Created Message Obj
    const createMessage = (fileURL = null) => {
        const messsage = {
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user: {
                id: user.uid,
                name: user.displayName,
                image: user.photoURL
            }
        }

        if(fileURL !== null) {
            // image 컬럼 추가
            messsage["image"] = fileURL
        } else {
            messsage["content"] = content
        }

        return messsage
    }


    // Send Message Obj to DB
    const handleSubmit = async () => {
        if(!content) {
            setErrors(prev => prev.concat("Type contents first"))
            return
        }
        setLoading(true)

        try {
            await messageRef.child(chatRoom.id).push().set(createMessage())
            setLoading(false)
            setContent('')
            setErrors([])
        } catch (error) {
            setErrors(pre => pre.concat(error.message))
            setLoading(false)
            setTimeout(() => {
                setErrors([])
            }, 5000);
        }
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" value={content} onChange={handleChange} rows={3} placeholder="Write a message." />
                </Form.Group>
            </Form>

            <div>
                {errors.map(errorMsg => <p style={{color:'red'}} key={errorMsg}>
                    {errorMsg}
                </p>)}
            </div>

            <Row>
                <Col>
                    <button className="message-from-button" style={{width:'100%'}}> UPLOAD </button>
                </Col>
                <Col>
                    <button className="message-from-button" style={{width:'100%'}} onClick={handleSubmit}> SEND </button>
                </Col>
            </Row>
        </div>
    )
}

export default MessageForm
