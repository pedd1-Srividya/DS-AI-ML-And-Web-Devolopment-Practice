//conditional statement
let age=12;
if (age>=18)
{
    console.log("your eligible to vote")
}else{
    console.log("You are not eligible to vote")
}
//if else if ladder
let marks=85;
if(marks>=90){
    console.log("A")
}else if(marks>=80){
    console.log("B")
}else if(marks>=70){
    console.log("C")
}else{
    console.log("F")
}
//input from user
let name=prompt('enter your name');
console.log(name)
//switch
let color="red";
switch(color){
    case "red":
        console.log("Stop")
        break;
    case "green":
        console.log("Go")
        break;
    default:
    console.log("Stop")
    break;
}
//loops
for(let i=1;i<10;i++)
{
    console.log(i)
}
//loops
for(let i=1;i<10;i++)
{
    console.log(i)
}
//factorial of a number
let n=5;
let fact=1;
for(let i=1;i<=n;i++)
{
    fact=fact*i;
}
console.log(fact)
//while loop
let i=1;
while(i<10)
{
    console.log(i)
    i++;
}
i=10;
do{
    console.log(i)
}while(i<10)
let  j=10;
// ++ and -- pre and post
console.log(j)
console.log(j++)
console.log(j)