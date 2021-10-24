import React, { useState } from 'react'
import { Card, Button, Alert, Jumbotron, Navbar, Nav, Container, Row, Col, Table } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext'
import { useHistory } from 'react-router-dom'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Leaderboard() {

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
                Global Leaderboard
            </h1>
            <Table striped bordered hover>
            <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>



            </Table>
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <strong>Email:</strong> {currentUser.email} */}

        <div className= "w-100 text-center mt-2">
               <Button variant="primary" onClick={handleLogout}> Log Out</Button>
            </div>
        </div>
    )
}
