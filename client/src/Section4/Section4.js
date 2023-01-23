import React, { useEffect, useState } from 'react'
import './Section4.css';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';   


import Form from 'react-bootstrap/Form';


export default function Section4() {
    const[users,setUsers]=useState([])
    const[search,setSearch]=useState([])



    const getUsers=()=>{
       axios.get('http://localhost:5000/users')
       .then(res=>setUsers(res.data))
    }
    

    useEffect(()=>{
        getUsers()
    },[])
    

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:5000/users/${id}`)
        .then(getUsers())

    }
    const Search=(e)=>{

      const searchcards= users.filter(x=>x.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setSearch(searchcards.length===0 ? false : searchcards)

      if(search.length===0){
       getUsers()
      }

     }
      const handleSort=()=>{
     
      if(search.length !== 0){
        const filter1 = [...search].sort((a,b)=> a.name.localeCompare(b.name))
        setSearch(filter1)
      }

 
     
      console.log(users);
    }

     
  return (
    <div className='users'>
      <div className='search'>
        <button onClick={handleSort}>a-z</button>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={Search}
            />
            <button variant="outline-success">Search</button>
          </Form>
      </div>
      <div className='carddiv'>

        {
          search?
            search.map((item)=>(
                <Card sx={{ maxWidth: 349 }} key={item._id}>
      <CardMedia 
      sx={{ height: 143 }}>
    <span><img alt='human' src={item.image}/></span> </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.profession}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.about}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={()=>handleDelete(item._id)} size="small">Delete</Button>

      </CardActions>
    </Card> 
    
            )):
            users.map((item)=>(
              <Card sx={{ maxWidth: 349 }} key={item._id}>
    <CardMedia 
    sx={{ height: 143 }}>
  <span><img alt='human' src={item.image}/></span> </CardMedia>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {item.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.profession}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {item.about}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={()=>handleDelete(item._id)} size="small">Delete</Button>

    </CardActions>
  </Card> 
  
          ))
        }
      </div>

    </div>
  )
}
