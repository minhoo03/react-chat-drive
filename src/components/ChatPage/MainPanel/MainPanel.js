import React from 'react'
import Message from './Meesage'
import MeesageForm from './MeesageForm'
import MeesageHeader from './MeesageHeader'

export default function MainPanel() {
    return (
        <div style={{paddding: '2rem 2rem 0 2rem'}}>
            <MeesageHeader />

            <div style={{
                width: '100%',
                height: '50vh',
                border: '.2rem solid #ececec',
                padding: '1rem',
                marginBottom: '1rem',
                overflowY: 'auto',
                backgroundColor:'lightgray'
            }}>

            </div>

            <MeesageForm />
        </div>
    )
}                                               
