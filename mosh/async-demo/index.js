console.log('Before');
 getUser(1 ,getRepositries );
console.log('After');

function getRepositries(user){
    getRepositries(user.githubname, getCommits);  
}
function getCommits(repos){
    getCommits(repo, displayCommit);
}
function displayCommits(commits){
    console.log(commits);
}



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