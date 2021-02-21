import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Image } from 'react-bootstrap'
import { FaLock } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import { BiSearchAlt2 } from 'react-icons/bi'

function MeesageHeader() {
    return (
        <div style={{
            width: '100%',
            height: '140px',
            border: '.1rem solid lightgray',
            borderRadius: '4px',
            padding: '1rem',
            marginTop: '1rem',
            marginBottom: '1rem'
        }}>
            <Container>
                <Row>
                    <Col> <h4><FaLock /> ChatRoom <MdFavorite /></h4> </Col>
                    <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1"> <BiSearchAlt2 /></InputGroup.Text>
                        </InputGroup.Prepend>

                        <FormControl
                            placeholder="Search a message..."
                            aria-label="search"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col> description </Col>
                    <Col> <Image src="" />{" "}user name </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MeesageHeader
