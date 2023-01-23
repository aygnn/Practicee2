import React from 'react'
import './Add.css';
import { Formik, Form, Field } from 'formik';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  image: Yup.string().required("Please upload image file"),

  name: Yup.string().required("Name is required"),
  profession: Yup.string().required("Profession is required"),
  about: Yup.string().required("Please add some information"),

   
});
export default function Add() {
  return (
    <div>
    <Formik
    initialValues={{
      image:'',
      name:'',
      profession:'',
      about:''
    }}
    validationSchema={SignInSchema}
    validateOnChange={false}
    validateOnBlur={false}
    onSubmit={async(values)=>{
      await axios.post('http://localhost:5000/users',values)
      .then(res=>console.log(res.data))
      console.log(values);
    }}>
      {({errors,touched})=>(
        <Form>
            <Field as={TextField} id="outlined-basic" label="Image Url" variant="outlined" name='image' /><br/>
            {errors.image && touched.image && (
              <div style={{color: 'red' ,fontSize: '15px' , marginTop : '-27px'}}>{errors.image}</div>
            )}

            <Field as={TextField} id="outlined-basic" label="Name" variant="outlined" name='name' /><br/>
            {errors.name && touched.name && (
              <div style={{color: 'red' ,fontSize: '15px' , marginTop : '-27px'}}>{errors.name}</div>
            )}
            <Field as={TextField} id="outlined-basic" label="Profession" variant="outlined" name='profession' /><br/>
            {errors.profession && touched.profession && (
              <div style={{color: 'red' ,fontSize: '15px' , marginTop : '-27px'}}>{errors.profession}</div>
            )}
            <Field className='about' as={TextField} id="outlined-basic" label="About" variant="outlined" name='about' /><br/>
            {errors.about && touched.about && (
              <div style={{color: 'red' ,fontSize: '15px' , marginTop : '-27px'}}>{errors.about}</div>
            )}
            <Stack className='stack' direction="row" spacing={2}>
               <Button type='submit' variant="contained" color="success">Add new User </Button>
    </Stack>
        </Form>
      )}

    </Formik>


    </div>
  )
}
