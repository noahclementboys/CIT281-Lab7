class MyError extends Error {
    constructor(args){
        super(args);
        this.name = 'CustomError';
    }
};

function throwGenericError(){
    throw new Error('Generic error');
};

function throwCustomError(){
    throw new Error('Custom error');
};

console.log('Force generic error')
try{
    console.log('Generic error try block')
    throwGenericError();
}catch(err){
    console.log('Generic error catch block');
    console.log(`${err}`)
}finally{
    console.log('Generic error finally block');
};

console.log('Force custom error');
try{
    console.log('Custom error try block');
    throwCustomError();
}catch(err){
    console.log('Custom error catch block');
    console.log(`${err}`)
}finally {
    console.log('Custom error finally block');
};