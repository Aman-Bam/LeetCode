var once = function(fn) {
    let flag = false
    return function(...args){
        if(flag === false){
            flag = true
            return fn(...args)
        }else{
            return undefined
        }
    }
};