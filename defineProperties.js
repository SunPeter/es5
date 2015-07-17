var person = {}
Object.defineProperties(person, {
    "name": {
        configurable: true, //delete person.name
        enumerable: true, //for...in 

        value: "ssd",
        writable: true //person.name=xxx
    },
    "getname":{
        configurable: true, //delete person.name
        enumerable: true, //for...in 

        set: function(value) {
            this.name = value
        },
        get: function() {
            console.log(this.name)
        }
    }
})