const morgan =require('morgan');
const helmet = require('helmet');
const Joi = require("joi")
const logger = require('./logger');
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));

app.use(logger);


const genres =[
    {id:1,name:'Action'},
    {id:2,name:'Horror'},
    {id:3,name:'Romantic'},
]

app.get("/",(req,res) => {
    res.send("Hello Harsh")
})

app.get('/api/genres',(req,res) => {
    
    res.send(genres)
})

app.get('/api/genres/:id',(req,res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("The genres with given id not found")
    res.send(genre)
})

// HTTP post request
app.post('/api/genres', (req, res) => {
    const { error } = validateGenre(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    const genre = {
      id: genres.length + 1,
      name: req.body.name
    };
    genres.push(genre);
    res.send(genre);
  });

// To update 
  app.put('/api/genres/:id',(req,res) => {
    //   Look up for course
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("The genres with given id not found")
   
   
    //Validate
    //If invalid , return 404 -Bad request
    const {error} = validateGenre(req.body)
      
      if(error) return res.status(400).send(error.details[0].message);
    //Update the course
    // Return the updated course 
    genre.name = req.body.name;
    res.send(genre)
  })

  function validateGenre(genre){
      const schema ={
          name:Joi.string().min(3).required()
      };
      return Joi.validate(genre,schema);
  };

// delete

app.delete("/api/genres/:id",(req,res) => {
    const genre = genres.find(c => c.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send("The genres with given id not found")
   
    const index = genres.indexOf(genre);
    genres.splice(index,1);
    res.send(genre)
})



// //PORT
const port = process.env.PORT || 3000
app.listen(port, console.log(`Listening on port ${port}...`));

// const port = process.env.PORT || 3000
// app.listen(port, console.log(`Listening on port ${port}....`));
