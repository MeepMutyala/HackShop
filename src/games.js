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
                    The classic game, but instead of random words, it's items from your shopping list!
                </Card.Body>
            </Card>
            </Col>
            <Col xs={3}>
            <Card style={{color:"black"}}  className="CardStyle">
                <Card.Header as="h5" style={{textAlign:"center"}}>
                    Shopping Challenges
                </Card.Header>
                <Card.Body>
                    Want something to think about while shopping? Try out our fun challenges to kick this shopping trip into high gear!
                </Card.Body>
            </Card>
            </Col>
            <Col xs={3}>
            <Card style={{color:"black"}}  className="CardStyle">
                <Card.Header as="h5" style={{textAlign:"center"}}>
                    Daily Deals
                </Card.Header>
                <Card.Body>
                    Looking for exclusive discounts and coupons? Play games and check out this tab!
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
