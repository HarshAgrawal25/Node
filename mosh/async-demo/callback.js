console.log('Before');
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });


// const p =getUser(1);
// p.then(user => console.log(user));

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos =>getCommits(repos))
    .then(commits => console.log(`Commits ${commits}`))
    .catch(err => console.log(`Error ${err.message}`))


console.log('After');

function getUser(id) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'Harsh' });
          }, 2000);
    })
}

function getRepositories(username) {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
          }, 2000);
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['Harsh']);
          }, 2000);
    })
}