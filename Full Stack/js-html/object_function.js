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
}
multiply(5,2)








