let names=['akjshu','ghsu','ushubh']
for ( let item of names)
{
    console.log(item)
}
names.forEach(f=>console.log(f))
let person={
    name:"jwijw",
    age:15,
    isStudent:true,
    list:[15,65,75]
}
console.log(person)
console.log(person["age"])
console.log(person["list"][0])
person.city="Delhi"
console.log(person["city"])
person["Country"]="India"
console.log(person["Country"])


for(let key in person)
{
    console.log(key,":",person[key])
}
function greet(name="Guest")
{
    console.log("Hello!"+ name)
}
greet("Xyz")
greet()

const multiply=(a,b)=>{
    return a*b
};
console.log(multiply)
function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(4))

function calc(a,b,op){
    if(op=='+') return a+b;
    if(op=='-') return a-b;
    if(op=='/') return a/b;
    if(op=='*') return a*b;
}
console.log(calc(5,2,'+'))
console.log(calc(5,2,'-'))
console.log(calc(5,2,'/'))
console.log(calc(5,2,'*'))







