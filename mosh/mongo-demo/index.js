const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...",err))

  const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
  });


  const Course = mongoose.model('Course',courseSchema);

  async function createCourse(){
    const course =new Course({
      name:"Java Course",
      author:'Mosh',
      tags:['Java','backend'],
      isPublished:true
    })
  const result = await course.save();
console.log(result);
  }


async function getCourse(){
const courses =  await Course
    .find({isPublished:true  })
    .count()
    console.log(courses); 
}

getCourse();