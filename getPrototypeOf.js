var o={
	age:1
}

var b=Object.create(o)

console.log(Object.getPrototypeOf(b))
// =》 o