var util = require('util'); 
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 

// prototype
Base.prototype.showName = function() { 
    console.log(this.name);
};


function Sub() { 
    this.name = 'sub'; 
} 

// SUb类继承Base类
// ub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
// objSub.sayHello(); 
console.log(objSub); 