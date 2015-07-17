function Super (name) {
	this.colors=[1,2,3]
}
Super.say=function(){
	alert(1)
}

function Sub(name,age){
	this.name=name;
	this.age=age;
	Super.call(this,this.name)
	
	this.profile=function(){
		console.log(this)
	}
}
// Sub.prototype=new Super()
Sub.prototype=Object.create(Super.prototype)


var s=new Sub("ssd",18)


