// 禁止添加新属性

var obj = {
	name:2
};
var obj2 = Object.preventExtensions(obj);

obj2.a=1

console.log(obj2)


