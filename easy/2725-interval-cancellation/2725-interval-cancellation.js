var cancellable = function(fn, args, t) {
    fn(...args)

    intervalId = setInterval(()=>{
        fn(...args)
    }, t)

    cancelFn = () =>{
        clearInterval(intervalId)
    }

    return cancelFn
};
