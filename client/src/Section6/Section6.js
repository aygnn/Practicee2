import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import './Section6.css';

import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Container from 'react-bootstrap/Container';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
export default function Section6() {

  return (
    <div className='section6'>

    <Container>


    <div>
    <div className='messageus'>
        <div><h2>Message Us</h2>
        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p></div>
    </div>

    <div>
    <FormControl variant="standard">
        <div className='nameinputs'>

        <BootstrapInput placeholder='Name' id="bootstrap-input" />
        <BootstrapInput placeholder='LastName' id="bootstrap-input" />
        </div>
        <div className='emailinput'>

        <BootstrapInput placeholder='Subject' id="bootstrap-input" />
        <BootstrapInput placeholder='Email' id="bootstrap-input" />
        </div>
        <BootstrapInput className='write' placeholder='Write your message here' id="bootstrap-input" />



      </FormControl>
    </div>

    </div>
    </Container>
    </div>
  )
}
