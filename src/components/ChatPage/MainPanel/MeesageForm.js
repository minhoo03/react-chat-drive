import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

function MeesageForm() {
    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Write a message." />
                </Form.Group>
            </Form>

            <Row>
                <Col>
                    <button className="message-from-button" style={{width:'100%'}}> UPLOAD </button>
                </Col>
                <Col>
                    <button className="message-from-button" style={{width:'100%'}}> SEND </button>
                </Col>
            </Row>
        </div>
    )
}

export default MeesageForm
