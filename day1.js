// ARITHMETIC OPERATORS
console.log("ARITHMETIC OPERATIONS")
let a=20
let b=5
let c=a+b
let d=a-b
let e=a*b
let f=a/b
let g=a%b

console.log("Addition result is",c)
console.log("Subtraction result is",d)
console.log("Multiplication result is",e)
console.log("Division result is",f)
console.log("Modulus result is",g)

// LOGICAL OPERATORS
console.log("LOGICAL OPERATIONS")
console.log(a>b)
console.log(a>=b)
console.log(a<b)
console.log(a<=b)
console.log(a==b)

// TERNARY OPERATORS
console.log("TERNARY OPERATIONS")
console.log(a>b? "greater" : "smaller")
console.log(a>=b? "greater or equal" : "smaller")
console.log(a<b? "smaller" : "greater")
console.log(a<=b? "smaller or equal" : "greater")
console.log(a==b? "equal" : "not equal")

// IF LOOP
console.log("IF LOOPING")
if(a>b){
    console.log("a is greater")
}
else{
    console.log("b is greater")
}
if(a<b){
    console.log("b is greater")
}
else{
    console.log("b is smaller")
}
if(a==b){
    console.log("a is equal to b")
}
else{
    console.log("a is not equal to b")
}

//FOR LOOP
console.log("FOR LOOPING")
let arr=["one","two","three","four","five"]
for(let i=0; i<arr.length; i++){
    const element=arr[i];
}
console.log(arr[0])
console.log(arr[1])
console.log(arr[3])


// WHILE LOOP
console.log("WHILE LOOPING")
let j=0
while(j<arr.length){
    console.log(j)
    console.log(arr[j])
    j++
}

// STRING FUNCTIONS
console.log("STRING FUNCTIONS")

// SPLIT FUNCTION
console.log("1 SPLIT FUNCTION") // splits string into array
let z="Im working on Visual Studio Codes"
console.log(z.split(" ")) // splitting based on space in z
console.log(z.split("o")) // splitting based on 'o' in z

// CHARAT FUNCTION
console.log("2 CHARAT FUNCTION") // returns characters from the string 
console.log(z.charAt(4)) 
console.log(z.charAt(2))
console.log(z.charAt(12))
console.log(z.charAt(16))

// CONCAT FUNCTION
console.log("3 CONCAT FUNCTION")
console.log(z.concat("practicing javascript"))
console.log(z.concat(" practicing javascript"))