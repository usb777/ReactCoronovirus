

const devEnvironment = {
    webflicksBaseUrl:'https://jsonplaceholder.typicode.com'
}
/*
const prodEnvironment = {
    webflicksBaseUrl:'http://ec2-52-91-202-52.compute-1.amazonaws.com:2002'
}
*/
export let environment = devEnvironment

if(process.env.REACT_APP_ENV === 'production'){
    environment = devEnvironment
}