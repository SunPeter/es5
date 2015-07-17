var a=[1,2,3]

console.log(Array.isArray(a))


if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}