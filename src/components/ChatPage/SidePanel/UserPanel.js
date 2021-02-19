import React from 'react'
import { AiFillWechat } from 'react-icons/ai'
import { Dropdown, Container, Row, Col, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import firebase from '../../../firebase'

function UserPanel() {

    const user = useSelector(state => state.user.currentUser)

    const handleLogout = () => {
        firebase.auth().signOut()
    }

    return (
        <div>
            <h3 style={{color:'white'}}>
                <AiFillWechat /> {" "}React-Chat
            </h3>

            <div style={{ marginBottom: '1rem'}}>
                <Dropdown>
                <Image src={user && user.photoURL} roundedCircle style={{width: '30px', height: '30px', marginTop: '3px'}} />
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor:'transparent', border: '0px'}}>
                        {user && user.displayName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                            프로필 사진 변경
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={handleLogout}>
                            로그아웃
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default UserPanel
