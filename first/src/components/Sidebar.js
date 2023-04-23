import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './Sidebar.css'
function sidebar() {
  return (
    <div>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav>
            <Link to="/home" className='nav-link'>Home</Link>
            <Nav.Link href="#mycalendar">My Calendar</Nav.Link>
            <Nav.Link href="#widgets">Widgets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='separator'></div>
    </div>
  )
}

export default sidebar
