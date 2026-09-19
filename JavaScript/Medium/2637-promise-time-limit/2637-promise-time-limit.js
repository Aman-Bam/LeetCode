var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const onSucess = fn(...args)
        const result = new Promise((res, rej)=> {
            setTimeout(()=>{
                rej("Time Limit Exceeded")
            }, t)
        })

        return Promise.race([onSucess, result])
    }
};