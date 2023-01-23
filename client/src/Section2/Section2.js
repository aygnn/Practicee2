import React from 'react'
import './Section2.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGraduationCap,FaUniversity } from 'react-icons/fa';


export default function Section2() {
  return (
    <div>
      

      <Container>
      <div className='ourprograms'>
        <h2>Our Programs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>

      </div>
      <Row>
        <Col sm={7}>
          <img src='https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg'/>
        </Col>
        <Col sm={5}>
          <div className='excellent'>
          <h2>
          We Are Excellent In Education
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
        <div>
          <span><FaGraduationCap/></span>22,931 Yearly Graduates</div>


        <div>
          <span><FaUniversity/></span>150 Universities Worldwide</div>
          </div>
         
        </Col>
      </Row>
     
    </Container>
    </div>
  )
}
