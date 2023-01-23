import React from 'react'
import './Sectio3.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGraduationCap,FaUniversity } from 'react-icons/fa';


export default function Section3() {
  return (
    <div>
         <Container>
      <Row>
        <Col>
        <div className='solyazi'>

        <div>
            <h2>Strive for Excellent</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
        </div>
        <div className='excellent2'>
         
        <div>
          <span><FaGraduationCap/></span>22,931 Yearly Graduates</div>


        <div>
          <span><FaUniversity/></span>150 Universities Worldwide</div>
          </div>
        </div>
        </Col>

        <Col>
        <div className='sagsekil'>
            <img src='https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg'/>
            </div></Col>
      </Row>

    </Container>
    </div>
  )
}
