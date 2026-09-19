var createCounter = function(init) {
    let currNum = init
    return {
        increment: () => {
            return ++currNum
        },
        decrement: () => {
            return --currNum
        },
        reset : () => {
            currNum = init
            return currNum
        }
    }
};
