function spy() {
    return 'test'
}

function receivesAFunction(spy){
    spy()
}


let returnsANamedFunction = () => { 
    return function fn() {

    }
}

function returnsAnAnonymousFunction() {
    return () => {
        console.log('test')
    }
}
