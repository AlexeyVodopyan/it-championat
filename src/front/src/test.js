//
// let fizz = function (){
//     //this
// } // function expression
//
// let bazz = () => {
//     //нет собственного this
// } //arrow function
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function Foo() {
//     //this
//     this.a = 2
//     console.log('foo')
// } // function declaration
//
// function foo(name) {
//     console.log(this)
//     console.log(name)
// } // function declaration
//
//
// let myObj = {}
// myObj.foo = foo
// //
// // foo()
// // myObj.foo()
// // new Foo()
// // foo.call(myObj, 'hello', 2)
// // foo.apply(myObj, ['hello', 2])
// let myObj2 = new Foo()
// console.log(myObj2)
//
//
//
//
//
//
//
// if('condition') {
//
// } else if('5') {
//
// } else if('5') {
//
// }
//
// switch ('condition') {
//     case "condition": {
//         console.log('ура')
//         break;
//     }
//     case "condition2": {
//         console.log('ура')
//         break;
//     }
//     case "condition3": {
//         console.log('ура')
//         break;
//     }
//     default:{
//         console.log('default')
//     }
// }
// // && и ||
// const a = '' || 4
// const b = '' || 4 && 3
//
// console.log(b)
//

const users = [null, null, {}, {name: 'Bob'}]


let users2 = []
// users.forEach(user => user && user.name && users2.push(user.name) || users2.push('UNKNOWN'))
// condition ? operator1 : operator2
users.forEach(user => user && user.name
    ? users2.push(user.name)
    : users2.push('UNKNOWN')
    )

console.log(users2)







