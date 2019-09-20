// *********sample****************
// let Name:string='jeev';
// // alert(Name);
// console.log("Name:"+Name);
// let company: any;
// company="ustglobal";
// company= 23;
// console.log(company);
// // *****************union***********************
// let sample: number|boolean;
// sample=10;
// sample=true;
// console.log(sample);
// //*************************Array************************ */

// let array:any[]=[1345,'abc',123,'xyz'];
// console.log(array);
// let array1:string[]=['abc','aaa'];
// console.log(array1);
// /**  in type script we have 3 access specifiers
//  * 1.public:access anywhere.
//  * 2.private:cant access directly.
//  * 3.protecred: we can access thr inheritance.
// */


// // ***********tuple************

// let tuple1:[string,number,boolean]=['abc',233,true];
// console.log(tuple1);

// // ******************enum********************** it will initialize each and every variables with numbers starts from 0
// enum colors{
//     red=100,
//     green,
//     blue,
//     black
// }
// console.log(colors);
// console.log(colors.blue);


// enum col{
//     red='danger',
//     green='success',
//     blue='primary',
//     black='dark'
// }
// console.log(col);
// console.log(col.blue);
// // *******************class************class members********
// //can not have multiple constructor in one class.
// class Person{
//     name:string;
//     age:number;  
//     constructor(pname:string,page:number){ //we can access any  type of access specifier
//         this.name=pname;
//         this.age=page;
//     }
// }
// //create an object of the class.........
// let person=new Person('raj',10);//paranthesis is used to call the constructor i.e constructor call
// //access a name
// console.log(person.name);
// console.log(person.age);

// nullable types**************************
// let myname='raj';
// myname=null;
// *****************************************************************************************

//static and non static members of the class
// class car{
//     brand:string='BMW';
//     static model:string='x5';
// }

// let bmwcar=new car();
// console.log(bmwcar.brand);
// ********************************************************************************************
// access specifiers

// class car{
//     constructor(public brand:string,public model:string){ 
//     }
// }
//object creation one way
// let bmwcar=new car('bmw','x5');
// console.log(bmwcar.brand);
// console.log(bmwcar.model);

// // object creation other way
// let benzcar:car={
//     brand:'benz',
//     model:"xy123"
// }
// console.log(benzcar.brand);
// console.log(benzcar.model);

// **********************inheritance*************************************************
// 
// ************accessing superclass by creating the object of super class********************
// class is the blueprint of the object.................********in order to chk none of the variable were missing..
// class Person{
//     name:string='Jeevitha';
//     age:number=22;
// }
// class Student extends Person{
//     public display(){
//     console.log(this.name);
//     }
// }
// let s1=new Student();
// console.log(s1.age);
// s1.display();
// **********************************************************************************************************
// how to pass optional datamembers using question mark (?)
//creating an object by using class
// class Person{
// constructor(public name:string, public age:number,public degree ?: string){
// }
// }
//creating the object using classs
// let p1:Person={
//     name:'jeevitha',
//     age: 22
//     }

//     let p2:Person={
//         name:'pawar',
//         age: 23,
//         degree:'Engineering'
//         }
//    console.log(p1.name);
//    console.log(p1.age);
//    console.log("****************************************************");
//    console.log(p2.name);
//    console.log(p2.age);
//    console.log(p2.degree);

// *****************************Interface***************************************************************
// interface Student{
//     name:string;
//     age:number;
//     display():void;
// }

// class Person implements Student{
//     name='jeevitha  ';
//     age=22;
//     display(){
//         console.log("name:"+this.name +"age:"+this.age);
//     }
// }
// let p1=new Person();
// p1.display();
// // object creation another method...

// let s1:Student={
//     name:"Rao  ",
//     age:22,
//     display:()=>{
//         console.log("name:"+s1.name +"age:"+s1.age);
//     }
// }
// s1.display();
// *****************************************function which takes array as an argument************
//concat withe the empty array and return new array****
// function getArray(items:string[]){
//     return new Array().concat(items);
// }
// console.log(getArray(['abc','mno',"xyz"]));


// **************************************************************************************************************

// ***********************namespace**********************circle*******************
// namespace:  1:The namespace is used for logical grouping of functionalities.
//             2:A namespace can include interface,classes,functions and variables to support a single or a group of related functionalities
            // 3:A namespace can be created using the namespace keyword followed by the namespace name
            // 4:All thr interface,classes etc can be defined in the curly brackets...
// namespace MathOperation{
//     const PI=3.14;
//     export function CirumOfCir(radius: number){
        
//         console.log("circum of circle:"+2*PI*radius);
//     }
//     export function AreaOfCir(radius:number){
//         console.log("area of circle:"+ PI *radius*radius);
//     }
// }
// MathOperation.CirumOfCir(2);
// MathOperation.AreaOfCir(3);
// ****************************************************************************************************































