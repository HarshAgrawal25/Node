// A promise is an Object that holds ths eventual result of an Asynchronus operation

const p =new Promise(function(resolve , reject){
    setTimeout(() =>{
        //resolve("1");
        reject(new Error('message'));
    },2000)
    
   
});

p
    .then(result => console.log(`result ${result}`))
    .catch(err => console.log("Error",err.message));