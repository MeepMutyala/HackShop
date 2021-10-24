import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import { getHometown } from './signup'
import { getUserID } from './signup'
import { getTutorials } from './signup'

// import { state } from './signup'


export default function Dashboard() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    async function handleLogout() {
    const userIDAy = ""
    const getData= ""
        setError('')

        try{
            userIDAy = await getUserID();
            getData = await getTutorials(userIDAy);
        } catch{
            setError("did not work")
        }

        try {
            
            await logout()
            history.push('/login')

        } catch {
            setError('Failed to logout')
        }

    }
    return (
        <>
        <Card>
            <Card.Body>
            <h2 className = "text-center mb-4">Profileeee!</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            {/* <strong>Email:</strong> {"lolol"}   */}
            <strong>Hometown:</strong> {this.getData}
            </Card.Body>
        </Card>
        <div className= "w-100 text-center mt-2">
               <Button variant = "link" onClick={handleLogout}> Log Out</Button>
            </div>
        </>
    )
}
