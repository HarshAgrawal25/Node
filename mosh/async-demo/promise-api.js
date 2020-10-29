// Allready resolved promise

// const p = Promise.resolve({id:25})
// p.then((result) => console.log(result))

// Allready resolved error

const p = Promise.reject( new Error('Promise Not Accepted'))
p.catch((err) => console.log(err))