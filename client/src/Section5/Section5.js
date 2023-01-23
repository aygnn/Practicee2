import React from 'react'
import './Section5.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGraduationCap,FaUniversity } from 'react-icons/fa';


export default function Section5() {
  return (
    <div> <div>
    <Container>
 <Row>
   <Col>
   <div className='solsekil'>
       <img src='https://preview.colorlib.com/theme/oneschool/images/undraw_teacher.svg'/>
       </div></Col>
   <Col>
   <div className='sagyazi'>

   <div>
       <h2>Education is life</h2>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
   </div>
   <div className='excellent3'>
    
   <div>
     <span><FaGraduationCap/></span>22,931 Yearly Graduates</div>


   <div>
     <span><FaUniversity/></span>150 Universities Worldwide</div>
     </div>
   </div>
   </Col>

 </Row>

</Container>
</div></div>
  )
}
