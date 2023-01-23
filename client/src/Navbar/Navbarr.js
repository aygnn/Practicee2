import React from 'react'
import './Navbarr.css';
import { AiFillHome} from 'react-icons/ai';


import { Link } from 'react-router-dom'

export default function Navbarr() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <h2>OneSchool</h2>
        </div>
        <div className='component'>

        <Link className='home' to={'/'}><AiFillHome/> Home</Link>
        <Link to={'add'}><button className='button-85'>Add new user</button></Link>
        </div>
    </div>
  )
}
