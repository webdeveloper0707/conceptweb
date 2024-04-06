"use client"
import React, { useState } from 'react';
import Header from '../components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Sidefilter from './sidefilter';
import './css/style.css';

function Page() {
  const [activeMedium, setActiveMedium] = useState('English');
  const [activeTab, setActiveTab] = useState('Simulation');

  const handleClick = (type, value) => {
    if (type === 'medium') setActiveMedium(value);
    if (type === 'tab') setActiveTab(value);
  };

  const mediums = ['English', 'Hindi', 'Gujarati'];
  const tabs = ['Simulation', 'Activity', 'Worksheet', 'Stories', 'More'];

  return (
    <>
      <Header />
      <div className="container-fluid">
        <br />
        <div className="row">
          <div className="col-12 text-center">
            <h2>SELECT MEDIUM</h2>
            <Container>
              <Nav className="me-auto justify-content-center navbar-light bg-light MediumHead">
                {mediums.map(medium => (
                  <Nav.Link
                    key={medium}
                    href="#home"
                    className={`mediumlink border-bottom mx-2 ${activeMedium === medium ? 'Active' : ''}`}
                    onClick={() => handleClick('medium', medium)}
                  >
                    {medium}
                  </Nav.Link>
                ))}
              </Nav>
            </Container>
          </div>
          <hr />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center head2">
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Nav className="me-auto">
                {tabs.map(tab => (
                  <Nav.Link
                    key={tab}
                    href="#home"
                    className={`navlink mx-2 ${activeTab === tab ? 'Active' : ''}`}
                    onClick={() => handleClick('tab', tab)}
                  >
                    {tab}
                  </Nav.Link>
                ))}
              </Nav>
            </Container>
          </Navbar>
        </nav>
            <Sidefilter />
        <div className="row">
          <div className="col-2">
          </div>
          <div className="col-10">{/* Your content goes here */}</div>
        </div>
      </div>
    </>
  );
}

export default Page;
