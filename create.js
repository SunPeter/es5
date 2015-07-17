if (typeof Object.create != 'function') {
    (function() {
        var F = function() {};
        Object.create = function(o) {
            if (arguments.length > 1) {
                throw Error('Second argument not supported');
            }
            if (o === null) {
                throw Error('Cannot set a null [[Prototype]]');
            }
            if (typeof o != 'object') {
                throw TypeError('Argument must be an object');
            }
            F.prototype = o;
            return new F();
        };
    })();
}


var parent = {
    name: "ssd"
}

var child = Object.create(parent, {
    p: {
        value: 42
    }
})


console.dir(child)