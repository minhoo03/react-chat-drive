import React, { Component } from 'react'
import Message from './Message'
import MeesageForm from './MeesageForm'
import MeesageHeader from './MeesageHeader'
import { connect } from 'react-redux'
import firebase from '../../../firebase'


export class MainPanel extends Component {
    

    state = {
        messages: [],
        messagesRef: firebase.database().ref("messages"),
        messagesLoading: true
    }


    componeneDidMount() {
        const { chatRoom } = this.props
        if(chatRoom){
            this.addMessagesListeners(chatRoom.id)
        }
    }

    
    addMessagesListeners = (chatRoomId) => {
        let messageArray = []
        this.state.messagesRef.child(chatRoomId).on('child_added', DataSnapshot => {
            messageArray.push(DataSnapshot.val())
            this.setState({messages: messageArray, messagesLoading: false})
        })
    }


    renderMessages = messages => {
        return messages.length > 0 && messages.map(message => {
            return <Message key={message.timestamp} message={message} user={this.props.user} />
        })
    }


    render() {

        const { messages } = this.state

        return (
            <div style={{width: '95%', margin:'0 auto', paddding: '2rem 2rem 0 2rem'}}>
                <MeesageHeader />
    
                <div style={{
                    width: '100%',
                    height: '50vh',
                    border: '.1rem solid lightgray',
                    borderRadius:'4px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    overflowY: 'auto'
                }}>
                    {this.renderMessages(messages)}
                </div>
    
                <MeesageForm />
            </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {
        user: state.user.currentUser,
        chatRoom: state.chatRoom.currentChatRoom
    }
}

export default connect(mapStateToProps)(MainPanel)