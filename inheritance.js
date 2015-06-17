// function GrandParent(gprop) {
// 	// this.gprop = gprop;
// 	this.gprop = 1;
// }

// function Parent(prop, gprop) {
// 	// GrandParent.call(this, gprop);
// 	this.pprop = 2;
// }

// function Child(cprop, pprop, gprop) {
// 	//reusing parent constructor
// 	// Parent.call(this, pprop, gprop);
// 	// Parent.aplly(this, [pprop]);
// 	// thi	
// 	this.cprop = 3;
// }


//inheritance
// Child.prototype = new Parent();
// Parent.prototype = new GrandParent();
// Parent.prototype = GrandParent.prototype;
// Child.prototype = Parent.prototype;

// var ins = new Child(1, 2, 3);

// // console.log(ins instanceof Child);
// // console.log(ins instanceof Parent);
// // console.log(ins instanceof GrandParent);
// console.log(ins.cprop);
// console.log(ins.pprop);
// console.log(ins.gprop);


// var child = new Child('1', '2');

// var parent = {
// 	val: 3,
// 	init: function (pprop) {
// 		this.pprop = pprop;
// 		return this;
// 	},
// 	print: function () {
// 		console.log(this.pprop);
// 	}
// };

// var instances = [
// 	Object.create(parent)
// 		.init('1'),
// 	Object.create(parent)
// 		.init('2')
// ];

// for (var prop in instances[0]) {
// 	if (instances[0].hasOwnProperty(prop)) {
// 		console.log(prop, instances[0][prop]);
// 	}
// }

// var parent = {
// 	init: function (pprop) {
// 		this.pprop = pprop;
// 		return this;
// 	},
// 	print: function () {
// 		console.log(this.pprop);
// 	}
// };

// var instance = Object.create(parent);
// //equivalent to 
// var ins = {};
// ins.__proto__ = parent;

// var instances = [
// 	Object.create(parent)
// 		.init('1'),
// 	Object.create(parent)
// 		.init('2')
// ];

// instances.forEach(function(ins){
// 	console.log(ins.val);
// });

// parent.val = 4;

// instances.forEach(function(ins){
// 	console.log(ins.val);
// });


// var parent = {
// 	val: 3,
// 	init: function (pprop, v) {
// 		this.pprop = pprop;
// 		this.val = v;
// 		return this;
// 	},
// 	print: function () {
// 		console.log(this.pprop);
// 	}
// };

// var instances = [
// 	Object.create(parent)
// 		.init('ins-1', 1),
// 	Object.create(parent)
// 		.init('ins-2', 2)	
// ];
// console.log(instances);
// console.log(instances[0].__proto__.val);

// var parent = {
// 	val: 3,
// 	init: function (pprop, v) {
// 		this.pprop = pprop;
// 		this.val = v;
// 		return this;
// 	},
// 	print: function () {
// 		console.log(this.pprop);
// 	}
// };

// var child1 = Object.create(parent);
// var child2 = Object.create(parent);

// console.log(child1.val);
// console.log(child2.val);

// console.log(child1, child1.__proto__);
// child1.val = 5;
// console.log(child1, child1.__proto__);

// console.log(child1.val);
// console.log(child2.val);

// console.log(child1.__proto__.val);

var parent = {
	init: function (pprop) {
		console.log('FROM PARENT');
		this.pprop = pprop;
		return this;
	},
	print: function () {
		console.log(this.pprop);
		return this;
	}
};

var child = Object.create(parent);
child.init = function (pprop, cprop) {
	// this.prop = pprop;
	parent.init.call(this, pprop);
	this.cprop = cprop;
	return this;
};

var grandchild = Object.create(child);

var ins = Object.create(grandchild)
	.init(1, 2);
console.log(ins);
console.log(ins.cprop, ins.pprop);