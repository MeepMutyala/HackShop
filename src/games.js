import React, { useState } from 'react'
import { Card, Button, Alert, Jumbotron, Navbar, Nav, Container, Row, Col } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { useHistory } from 'react-router-dom'


export default function Games() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    async function handleLogout() {

        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to logout')
        }

    }
    return (
        <div className="App-header">
            <h1 style={{textAlign:"center", padding:"2vh 0 0 0"}}>
                Games!
            </h1>
            <Row style={{padding:"2vh 0 0 0", justifyContent:"center"}}>
                <Col xs={1}>
                </Col>
                <Col xs={3}>
            <Card style={{color:"black"}}  className="CardStyle">
                <Card.Header as="h5" style={{textAlign:"center"}}>
                    HangMan!
                </Card.Header>
                <Card.Body >
                    Describe our game here.
                </Card.Body>
            </Card>
            </Col>
            <Col xs={3}>
            <Card style={{color:"black"}}  className="CardStyle">
                <Card.Header as="h5" style={{textAlign:"center"}}>
                    Daily Challenge
                </Card.Header>
                <Card.Body>
                    This is some text within a card body. Describe our games here.
                </Card.Body>
            </Card>
            </Col>
            <Col xs={3}>
            <Card style={{color:"black"}}  className="CardStyle">
                <Card.Header as="h5" style={{textAlign:"center"}}>
                    Game 3? or just discounts/coupons
                </Card.Header>
                <Card.Body>
                    This is some text within a card body. Describe our games here.
                </Card.Body>
            </Card>
            </Col>
            <Col xs={1}>
                </Col>
            </Row>
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <strong>Email:</strong> {currentUser.email} */}

        <div className= "w-100 text-center mt-2">
               <Button variant="primary" onClick={handleLogout}> Log Out</Button>
            </div>
        </div>
    )
}
