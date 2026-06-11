

import express from 'express';

const app = express();

const mongoose=require("mongoose")
const Contact=require("./models/contacts.models")

//Database connection

mongoose.connect()
app.post('/add-contact',(req,res)=>{
  const contact=await Contact.insertOne
  first_name:req.body,   
  last_name:req.body.last_name,
  const contact=await Contact.findById(req.params.id)
  <form action ="/updatd-contact/:id">
    res.send (console.log)
  
})

app.post('/updated-contact/:id',(req,res)=>{

  await Contact.findByIdAndUpdate()
})




app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send("Home Page");
});
app.get('/',async(req,res)=>{
  const contacts= await  Contact.find()
  res.render('home',{contacts:contacts})

  res.json(contacts)
})

app.get('/about', (req, res) => {
  res.send("profile");
});
app.get('/form',(req,res)=>{
  res.render('form')

})
app.get('/add-contact',(req,res)=>{
  const contact=await Contact.find()
  res.render('home',{contacts})
})
app.post('/form',(req,res)=>{
  const name=<req className="body myname">
    const message=`Hello, ${name} you submmitted the form .`
    res.send(message)
  </req>

})


app.listen(3000, () => {
  console.log("Server started successfully on port: 3000");
});