var TimeLimitedCache = function() {
    this.cache = {}
};
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let result = false
    if(this.cache.hasOwnProperty(key)){
        result = true

        clearTimeout(this.cache[key].timer)
    }

    let ref = this 
    let timeoutId = setTimeout(()=>{
        delete ref.cache[key]
    }, duration)
    
    this.cache[key] = {val:value, timer : timeoutId}

    return result

};
TimeLimitedCache.prototype.get = function(key) {
    if(!this.cache.hasOwnProperty(key)){
        return -1
    }
    return this.cache[key].val
};
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cache).length
};