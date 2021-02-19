import React, { useRef } from 'react'
import { AiFillWechat } from 'react-icons/ai'
import { Dropdown, Container, Row, Col, Image } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import firebase from '../../../firebase'

function UserPanel() {

    const user = useSelector(state => state.user.currentUser)


    const handleLogout = () => {
        firebase.auth().signOut()
    }


    const inputOpenImageRef = useRef()


    const handleOpenImage = () => {
        inputOpenImageRef.current.click()
    }


    const handleUploadImage = async (e) => {
        const file = e.target.files[0]

        const metadata = file.type

        // save storage
        try{
            let uploadTaskSnapshot = await firebase.storage().ref()
            .child(`user_image/${user.uid}`)
            .put(file, metadata)
        } catch(error) {
            
        }
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
                        <Dropdown.Item href="#/action-1" onClick={handleOpenImage}>
                            프로필 사진 변경
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2" onClick={handleLogout}>
                            로그아웃
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <input accept="image/jpeg, image/png" type="file" style={{display: 'none'}} ref={inputOpenImageRef} onChange={handleUploadImage} />
        </div>
    )
}

export default UserPanel
