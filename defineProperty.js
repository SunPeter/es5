var person = {}

//property
Object.defineProperty(person,"name", {
        configurable: true, //delete person.name
        enumerable: true, //for...in 

        value: "ssd",
        writable: true //person.name=xxx
    }
)

//method
Object.defineProperty(person,"getname", {
        configurable: true, //delete person.name
        enumerable: true, //for...in 

        set: function(value) {
             this.name=value
        },
        get: function() {
            console.log(this.name)
        }
    }
)