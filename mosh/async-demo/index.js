console.log('Before');
 getUser(1 ,(user) => {
    getRepositries(user.githubname, (repos) => {
        console.log('Repos', repos
        )
    });    
});
console.log('After');



function getUser(id , callback){
    setTimeout(() => {
        console.log('Reading a user from a database....');
        callback({id: id , githubname:"harsh"})
    } ,2000);
}

function getRepositries(username, callback){
    setTimeout(() => {
        console.log("Calling github api ....");
        callback( 
           
            ['repo1','repo2','repo3'])
    },2000);
}