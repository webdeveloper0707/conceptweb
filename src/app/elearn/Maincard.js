import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
// import simimg from './images/Simulation.jpg'
import simimg from './images/Activity.jpg'
import './css/style.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';

function Maincard() {
  return (
      <div className="container p-3 ">
      <Card style={{ width: '70%',position:'relative',left:'15%' }}>
          <Card.Body>
            <Image variant="top" src={simimg} className='maincardimg'  />
            <hr />
            <Card.Title>Simulations</Card.Title>
            <Card.Text>
                this is the simulation game in virtual world
            </Card.Text>
          </Card.Body>
      </Card>

    </div>
  )
}

export default Maincard
