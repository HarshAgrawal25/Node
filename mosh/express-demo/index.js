const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id:1,name:"course1"},
    {id:2,name:"course2"},
    {id:3,name:"course3"}
]

app.get('/',(req,res) => {
    res.send("Hello World  Harsh !!");
});


app.get('/api/courses',(req,res) => {
    res.send(courses);
});

app.get('/api/courses/:id',(req,res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) return res.status(404).send("The course with given id not found")  ;
  res.send(course);
})

app.get('/api/posts/:year/:month',(req,res) => {
    res.send(req.params); 
})

app.get('/api/posts/:year/:month',(req,res) => {
    res.send(req.query); 
})
//postman
//validation
// HTTP post request
app.post('/api/courses',(req,res) => {
    const {error} = validateCourse(req.body)
      
    if(error) return res.status(400).send(error.details[0].message);
    

    const course = {
        id : courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

//Handling HTTP put request
//we use put method to update 

app.put('/api/courses/:id',(req,res) =>{
    //Look up the course
    //if not existing, return 404
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) return  res.status(404).send("The course with given id not found")  ;


    //Validate
    //If invalid , return 404 -Bad request
    
      const {error} = validateCourse(req.body)
      
      if(error) return res.status(400).send(error.details[0].message);
    //Update the course
    // Return the updated course 
    course.name = req.body.name
     res.send(course); 
})

function validateCourse(course){
    const scheme = {
        name: Joi.string().min(3).required()
      };
        return Joi.validate(course,scheme)
}

// delete method

app.delete("/api/courses/:id",(req,res) => {
    //Look up the courses
    // Not existing , return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send("The course with give id not found");

    //Delete
    const index = courses.indexOf(course);
    courses.splice(index,1);
    //Return the same courses

    res.send(course);
});


// PORT
const port = process.env.PORT || 3000
app.listen(port, console.log(`Listening on port ${port}....`));
