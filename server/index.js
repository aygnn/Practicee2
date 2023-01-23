const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv=require('dotenv')

const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config()
const PORT =process.env.PORT

const url=process.env.CONNECTION_URL.replace('<password>',process.env.PASSWORD)
mongoose.set('strictQuery', true);
mongoose.connect(url,(err)=>{
    if(!err){
        app.listen(PORT,()=>{
            console.log('SERVER WORKING');
        })
    }
})

const Schema = mongoose.Schema;

let users=new Schema({
    image:{type:String,required:true},
    name:{type:String,required:true},
    profession:{type:String,required:true},
    about:{type:String,required:true}
})
const Users=mongoose.model("Users",users)


//get users
app.get('/', (req, res) => {
    res.send('hello');
  });

//ADD USERS
app.post('/users',(req,res)=>{
        const newUser=new Users({
        image:req.body.image,
        name:req.body.name,
        profession:req.body.profession,
        about:req.body.about,
 })

 newUser.save()
 res.send({message:"user added"})
})

//get users

app.get('/users',(req,res)=>{
    Users.find({},(err,doc)=>{
        if(!err){
            res.send(doc)
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

//get byid

app.get('/users/:id',(req,res)=>{
    const {id}=req.params
    Users.findById(id,(err,doc)=>{
        if(!err){
            if(doc){
                res.send(doc)

            }
            else{
                res.send({message:'not found user'})
            }

        }
        else{
            res.status(404).json({message:err})
        }

    })
})
//delete

app.delete('/users/:id',(req,res)=>{
    const {id}=req.params
    Users.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send({message:'user deleted'})
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

