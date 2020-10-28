const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/SVVV') 
    .then(() => console.log("connection established with MongoDB"))
    .catch((err) => console.log('connected to MongoDB...',err));    


    //Creating a schema 

const courseSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    tags:[String],
    date: {type: Date , default :Date.now },
    isPublished: Boolean
})

    //create a modal
const Teachers = mongoose.model('Teachers',courseSchema);


async function createCourse(){
    return await Teachers.insertMany( [
        {
            firstName:'Ravi',
            lastName:'Mehra',
            tags:['java','C++'],
            isPublished:false
        },
         {
            firstName:'Virat',
            lastName:'Jaiswal',
            tags:['java','C++'],
            isPublished:false
        }  ,
        {
            firstName:'Virat',
            lastName:'Jaiswal',
            tags:['java','C++'],
            isPublished:false
        }  ,
        
    ]
        );
        // since data will take some time to uplaod on database (asynchrous nature)
}

 

// async  function runCreateCourse(){
//     const result =  await createCourse.save(); 
//     console.log(result);
// }

//  createCourse();



async function readCourse(){
    const teacher =await Teachers.find();
    console.log(teacher);
}

// readCourse();


//delete

async function deleteCourse(id){
    const teacher = await Teachers.deleteOne({_id:id});
    console.log(teacher);
}

 deleteCourse('5f8ff60a8308c45fb0e67e14');

//update
async function updateCourse(id){
    const teacher = await Teachers.findById(id);
    if(!teacher) return;
    teacher.isPublished =true;
    
    const result = await teacher.save();
    console.log(result);

}

//  updateCourse('5f8ff60a8308c45fb0e67e14');
