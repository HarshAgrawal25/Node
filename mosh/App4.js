const fs = require('fs')
//synchronus
console.log(fs.readdirSync('./'));

//assynchronus

fs.readdir('./',function(err,files){
    if(err)console.log('Error',err)
    else console.log('Result',files);
})