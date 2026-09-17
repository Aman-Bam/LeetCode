const filter = function(arr, fn) {
    let newArr = []
    arr.forEach((value, index) => {
        if(fn(value, index)) {
            newArr.push(value)
        }
    })
    return newArr
};