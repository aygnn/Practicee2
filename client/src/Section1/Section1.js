import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Section1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
export default function Section1() {
  return (
    <>
    <div className='section1'>
      <Container>
      <Row>
        <Col>
        <div className='text1'>
          <h1>Learn From The Expert</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
         <button className='admission'>Admission Now</button>
          </div>
        </Col>
        <Col>
        <div className='colcard'>
        <Card >
     <div className='divsign'>Sign up</div>
     <div className='form'>
      <input placeholder='Email address'/><br/>
      <input placeholder='password'/><br/>
      <input placeholder='password'/><br/>
      <button className='sign'>
Sign Up
      </button>
     </div>
    </Card>
          </div> </Col>
      </Row>
    </Container>

    </div>
    </>
  )
}