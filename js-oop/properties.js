var Person = (function () {
	function Person(name, age) {
		this.name = name;
		this.age = age;
	}

	// Person.prototype = {
	// 	get name(){
	// 		return this._name;
	// 	},
	// 	set name(name){
	// 		this._name = name;
	// 	}
	// };
	
	Person.prototype = Object.defineProperties(Object.prototype, {
		name: {
			get: function () {
				return this._name;
			},
			set: function (name) {
				this._name = name;
				return this;
			}
		},
		introduce: function () {
			console.log(this.name + ' ' + this.age);
		}
	});

	// Person.prototype.introduce = function () {
	// 	console.log(this.name + ' ' + this.age);
	// };

	// Object.defineProperty(Person.prototype, 'name', {
	// 	// writable: true,
	// 	get: function () {
	// 		return this._name;
	// 	},
	// 	set: function (name) {
	// 		this._name = name;
	// 		return this;
	// 	},
	// 	enumerable: true
	// });

	// Object.defineProperty(Person.prototype, 'age', {
	// 	get: function () {
	// 		return this._age;
	// 	},
	// 	set: function (age) {
	// 		if (age < 0 || age > 150) {
	// 			throw new Error();
	// 		}
	// 		this._age = age;
	// 		return this;
	// 	},
	// 	enumerable: true
	// });

	return Person;
} ());


var p = new Person('John Doe', -18);
// console.log(p);
p.introduce();