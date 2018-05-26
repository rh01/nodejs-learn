/*exports 是模块公开的接口*/
// exports.world =  function  () {
//     // body...
//     console.log("Hello,world");
// }

// 2
//hello.js 
function Hello() { 
    var name; 
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('Hello ' + name); 
    }; 
}; 
module.exports = Hello;