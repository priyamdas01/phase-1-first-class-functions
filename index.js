//The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function
// The returnsANamedFunction function should:

// take no arguments
// return a named function
// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function

function receivesAFunction(cb){
    cb();
}

function returnsANamedFunction(){
    const cb = function (){
    }
    return cb;
}

function returnsAnAnonymousFunction(){
    return function(){
    }
}