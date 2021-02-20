import React from 'react'
import UserPanel from './UserPanel'
import ChatRooms from './ChatRooms'
import DirectMessages from './DirectMessages'
import Favorited from './Favorited'

function SidePanel() {
    return (
        <div 
            style={{
                backgroundColor: '#7B83EB',
                padding: '2rem',
                minHeight: '100vh',
                color: 'white',
                minWidth: '275px'
            }}>

            <UserPanel />

            <ChatRooms />

            <DirectMessages />

            <Favorited />
        </div>
    )
}

export default SidePanel
