'use client'
import Header from '../components/header'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Maincard from './Maincard';

function page() {
  return (
    <>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Container>
              <Nav className="me-auto justify-content-center navbar-light bg-light">
                <Nav.Link href="#home" className='mx-2 rounded-1'>English</Nav.Link>
                <Nav.Link href="#features" className='mx-2 rounded-1'>Hindi</Nav.Link>
                <Nav.Link href="#pricing" className='mx-2 rounded-1'>Gujarati</Nav.Link>
              </Nav>
            </Container>
          </div>
        </div>
      <nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-center head2'>
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="#home" className='navlink Active'>Simulation</Nav.Link>
                <Nav.Link href="#features" className='navlink'>Activity</Nav.Link>
                <Nav.Link href="#pricing" className='navlink'>Worksheet</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
      </nav>
      <Maincard />
      </div>
    </>
  )
}

export default page
