var reduce = function(nums, fn, init) {
    let val = init
    if(nums.length === 0){
        return init
    }else {
        nums.forEach((nums)=> {
            val = fn(val, nums)
        })
    }
    return val
};