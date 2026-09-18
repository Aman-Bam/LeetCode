function memoize(fn) {
    const cachedVal = {}
    return function(...args) {
        const val = args 
        if(val in cachedVal){
            return cachedVal[val]
        }else{
            const result = fn(...args)
            cachedVal[val] = result

            return result
        }
    }
}