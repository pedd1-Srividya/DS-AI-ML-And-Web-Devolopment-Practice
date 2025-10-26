//printing hello world
console.log("Hello World");

//Variables
var a=25;
var a=35;
console.log(a);
let b=25;
b=35;
console.log(b);
const c=35;
console.log(c);

// data type
//primitive datatype
let name="niassjnxja";//string
let age=25;//number
let isStudent=true;//boolean
let salary=null;//null
let x;//undefined(disadv:if u do not declare anything it automatically stores garbage value)
let big=2548988945465548487898959651626256595;//big end(which stores huge value)
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof salary);
console.log(typeof x);
console.log(typeof big);

//non primitive datatypes
let arr=[10,25,56,78];//arrays
console.log(arr[2]);
let obj={
    name:"Ravi",
    age:25
};//object(in object we will store the multiple values in one variable with key and values)
console.log(obj.name);
console.log(obj.age);
let user={
        ravi:{
            age:30,
            sex:"male",
            phno:26598464161
        }
};
console.log(user);
let array=[1,2,3,4,5,[6,7,9]]
console.log(array[5][1]);
let user1="Raj";
console.log("Hello", user1,",Welcome to class")

//loops
for(let i=0;i<=10;i++){
    console.log(i);
}
let j=1;
//while(j<=10){
// console.log(j);
//   j++;
//}
do{
    console.log(j);
    j++;
}while(j>25)
