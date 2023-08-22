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
console.log("FOR LOOPING EXAMPLE 1")
let arr=["one","two","three","four","five"]
for(let i=0; i<arr.length; i++){
    const element=arr[i];
}
console.log(arr[0])
console.log(arr[1])
console.log(arr[3])

// FOR LOOP
console.log("FOR LOOPING EXAMPLE 2")
let arr1=[5,10,15,20]
for(let i=0; i<5; i++){
console.log(i)
console.log(arr1[i])
}


// WHILE LOOP
console.log("WHILE LOOPING")
let j=0
while(j<arr.length){
    console.log(j)
    console.log(arr[j])
    j++
}



// SWITCH CASE
console.log("SWITCH CASE 1")
switch("one"){
    case "one": 
        console.log("user choosed one")
        break;
    case "1":
        console.log("user choosed wrong one")
        break;
    default:
        console.log("user choosed invalid one")
        break;
}

console.log("SWITCH CASE 2")
switch("1"){
    case "one": 
        console.log("user choosed one")
        break;
    case "1":
        console.log("user choosed wrong one")
        break;
    default:
        console.log("user choosed invalid one")
        break;
}

console.log("SWITCH CASE 3")
switch("two"){
    case "one": 
        console.log("user choosed one")
        break;
    case "1":
        console.log("user choosed wrong one")
        break;
    default:
        console.log("user choosed invalid one")
        break;
}

console.log("SWITCH CASE 4")
let num1,num2;
switch("add"){
    case "add": 
        console.log("num1+num2")
        break;
    case "sub":
        console.log("num1-num2")
        break;
    case "mul":
        console.log("num1*num2")
        break;
    case "div":
        console.log("num1/num2")
        break;
    default:
        console.log("invalid operation")
        break;
}

console.log("SWITCH CASE 5")
let num3,num4;
switch("sub"){
    case "add": 
        console.log("num3+num4")
        break;
    case "sub":
        console.log("num3-num4")
        break;
    case "mul":
        console.log("num3*num4")
        break;
    case "div":
        console.log("num3/num4")
        break;
    default:
        console.log("invalid operation")
        break;
}

console.log("SWITCH CASE 6")
let num5,num6;
switch("mul"){
    case "add": 
        console.log("num5+num6")
        break;
    case "sub":
        console.log("num5-num6")
        break;
    case "mul":
        console.log("num5*num6")
        break;
    case "div":
        console.log("num5/num6")
        break;
    default:
        console.log("invalid operation")
        break;
}


console.log("SWITCH CASE 7")
let num7,num8;
switch("div"){
    case "add": 
        console.log("num7+num8")
        break;
    case "sub":
        console.log("num7-num8")
        break;
    case "mul":
        console.log("num7*num8")
        break;
    case "div":
        console.log("num7/num8")
        break;
    default:
        console.log("invalid operation")
        break;
}

console.log("SWITCH CASE 8")
let num9,num0;
switch("logic"){
    case "add": 
        console.log("num9+num0")
        break;
    case "sub":
        console.log("num9-num0")
        break;
    case "mul":
        console.log("num9*num0")
        break;
    case "div":
        console.log("num9/num0")
        break;
    default:
        console.log("invalid operation")
        break;
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

// SLICE FUNCTION
console.log("STRING FUNCTION")
console.log("SLICE FUNCTION")
let namee="Welcome to Visual Codes Studio"
console.log(namee.slice(7,20))
console.log(namee.slice(7))
console.log(namee.slice(8,4))

// SUBSTR FUNCTION
console.log("SUBSTR FUNCTION")
console.log(namee.substr(8,2))
console.log(namee.substr(9,4))

// SEARCH METHODS
console.log("SEARCH METHODS")

// INDEXOF FUNCTION
console.log("INDEXOF FUNCTION")
let nam="Welcome to Visual Codes Studio Visual Codes Studio"
console.log(nam.indexOf("Welcome"))
console.log(nam.indexOf("welcome"))
console.log(nam.search(/Welcome/i))

// LASTINDEXOF FUNCTION
console.log("LASTINDEXOF FUNCTION")
console.log(nam.lastIndexOf("Codes"))
console.log(nam.lastIndexOf("to"))
console.log(nam.lastIndexOf("welcome"))

// TRIM FUNCTION
console.log("TRIM FUNCTION")
let nam1="    Welcome to Visual Codes Studio Visual Codes Studio "
console.log(nam1.trim())

// TRIMEND FUNCTION
console.log("TRIMEND FUNCTION")
let nam2="Welcome to Visual Codes Studio Visual Codes Studio      "
console.log(nam2.trimEnd())

// ARRAY METHODS
console.log("ARRAY METHODS")

// SORT FUNCTION
console.log("SORT FUNCTION")
let arr2=[1,2,4,5,3,6,8,7]
console.log(arr2.sort())

// REVERSE FUNCTION
console.log("REVERSE FUNCTION")
console.log(arr1.reverse())

// ARRAY TO STRING
// TOSTRING FUNCTION
console.log("ARRAY TO STRING")
console.log("TOSTRING FUNCTION")
let arr3=["one", "two", "three", 4, 5, 6]
console.log(arr3.toString())

// PUSH FUNCTION
console.log("PUSH FUNCTION")
console.log(arr3.push("red"))
console.log(arr3)

// POP FUNCTION
console.log("POP FUNCTION")
console.log(arr3.pop())
console.log(arr3.pop("4"))
console.log(arr3)

// SHIFT FUNCTION
console.log("SHIFT FUNCTION")
console.log(arr3.shift("1"))
console.log(arr3)

// UNSHIFT FUNCTION
console.log("UNSHIFT FUNCTION")
console.log(arr3.unshift(5))
console.log(arr3)

// INCLUDES FUNCTION
console.log("INCLUDES FUNCTION")
console.log(arr3.includes("three"))
console.log(arr3.includes("four"))

// JOIN FUNCTION
console.log("JOIN FUNCTION")
console.log(arr3.join(". "))
console.log(arr3.join("% "))

// NUMBER FUNCTION
console.log("NUMBER FUNCTION")

// FIXED FUNCTION
console.log("FIXED FUNCTION")
let num=2.3456789
console.log(num.toFixed(4))
console.log(num.toFixed(2))

// PRECISION FUNCTION
console.log("PRECISION FUNCTION")
console.log(num.toPrecision(4))
console.log(num.toPrecision(2))

// VALUEOF FUNCTION
console.log("VALUEOF FUNCTION")
console.log(num.valueOf())

// SET FUNCTION
console.log("SET FUNCTION")
let newArr=[8,6,4,2,7,5]
let newSet=new Set(newArr)
console.log(newSet)

// MAP FUNCTION
console.log("MAP FUNCTION")
let newMap=new Map([["id",1],["name","priya"], ["class","IT"]])
console.log(newMap)


// USER DEFINED FUNCTIONS
console.log("FUNCTIONS")

// FUNCTION WITHOUT PARAMETER
console.log("FUNCTION WITHOUT PARAMETER")
console.log("WITHOUT PARAMETER EXAMPLE 1")
function addmul(){
    console.log(10*15+25)
}
addmul()

// EXAMPLE2
console.log("WITHOUT PARAMETER EXAMPLE 2")
function muldiv(){
    console.log(5*10/2)
}
muldiv()

// FUNCTION WITH PARAMETER
// EXAMPLE1
console.log("FUNCTION WITH PARAMETER")
console.log("WITH PARAMETER EXAMPLE 1")
function addmul1(a,b,c){
    console.log(a*b+c)
}
addmul1(10,15,25)
addmul1(12,13,14)

// EXAMPLE2
console.log("WITH PARAMETER EXAMPLE 2")
function arrayop(arr1){
    for(let i=0;i<arr1.length;i++){
        console.log(arr1[i])
    }
}
arrayop([1,2,3,"one","two","three"])

// ARROW FUNCTION
console.log("ARROW FUNCTION")

// EXAMPLE1
console.log("ARROW FUNCTION EXAMPLE 1")
let arrowfun=()=>{
    console.log("This is arrowfun")
}
arrowfun()

// EXAMPLE2
console.log("ARROW FUNCTION EXAMPLE 2")
let arrowfun1=(arr2)=>{
    for(let i=0;i<arr2.length;i++){
        console.log(arr2[i])
    }
}
arrowfun1([1,2,3,"one","two","three"])

// TRY CATCH OR EXCEPTION HANDLING
console.log("TRY CATCH")
console.log("TRY CATCH EXAMPLE 1")
try{
    const a=[1,2,3]
    a=[4,5,6]
    console.log(a[1])
}
catch{
    console.log("when there is error in try,catch is executed")
}
console.log("when there is no error in try, catch doesn't execute,try and the last console executes")

// EXAMPLE2
console.log("TRY CATCH EXAMPLE 2")
try{
    const a=[1,2,3]
    // a=[4,5,6]
    console.log(a[1])
}
catch{
    console.log("when there is error in try,catch is executed")
}
console.log("when there is no error in try, catch doesn't execute,try and the last console executes")

// EXAMPLE3
console.log("TRY CATCH EXAMPLE 3")
try{
    const b="p r i y a p r i y a"
    console.log(b.split(" "))
    onsole.log(b.split(""))
}
catch{
    console.log("when there is error in try,catch is executed")
}
console.log("when there is no error in try, catch doesn't execute,try and the last console executes")

// OBJECT CREATION
// EXAMPLE1
console.log("OBJECT CREATION USING CONSTRUCTOR EXAMPLE 1")
class Person{
    constructor(name,age){
        this.name= "priya";
        this.age=21;
    }
}
const newClass=new Person()
console.log(newClass)
console.log(newClass.age)

// EXAMPLE2
console.log("OBJECT CREATION USING CONSTRUCTOR EXAMPLE 2")
class one{
    constructor(sno,rollno){
        this.sno=1;
        this.rollno=11;
    }
}
const newClass1=new one()
console.log(newClass1)

// DATE FUNCTION
console.log("DATE FUNCTION")
// DATE IS AN INBUILLT FUNCTION
let newDate=new Date()
console.log(newDate)

// GETTER METHODS
console.log("GETTER METHODS")
console.log("DATE FUNCTION-YEAR")
console.log(newDate.getFullYear())
console.log("DATE FUNCTION-DATE")
console.log(newDate.getDate())
console.log("DATE FUNCTION-DAY")
console.log(newDate.getDay())
console.log("DATE FUNCTION-HOURS")
console.log(newDate.getHours())
console.log("DATE FUNCTION-MILLISECONDS")
console.log(newDate.getMilliseconds())
console.log("DATE FUNCTION-MINUTES")
console.log(newDate.getMinutes())
console.log("DATE FUNCTION-MONTH")
console.log(newDate.getMonth())
console.log("DATE FUNCTION-SECONDS")
console.log(newDate.getSeconds())
console.log("DATE FUNCTION-TIME")
console.log(newDate.getTime())

// SETTER METHODS
console.log("SETTER METHODS")
console.log("DATE FUNCTION-SET MONTH")
newDate.setMonth(0)
console.log(newDate)

console.log("DATE FUNCTION-SET DATE")
newDate.setDate(30)
console.log(newDate)

// ARRAY ITERATION FUNCTION
// MAP FUNCTION
console.log("MAP FUNCTION")
console.log("MAP FUNCTION EXAMPLE1")
let arr4=[1,2,3,4,5,6]
let mapArr=arr4.map((val)=>{
    return val+5
})
console.log(mapArr)

console.log("MAP FUNCTION EXAMPLE2")
let arr5=["one", "two", "three", "four", "five"]
let mapArr1=arr5.map((val)=>{
    return val+00
})
console.log(mapArr1)

console.log("MAP FUNCTION EXAMPLE3")
let arr6=["one", "two", "three", "four", "five"]
let mapArr2=arr6.map((val)=>{
    return val+001
})
console.log(mapArr2)

console.log("MAP FUNCTION EXAMPLE4")
let arr7=["one", "two", "three", "four", "five"]
let mapArr3=arr7.map((val)=>{
    return val+1001
})
console.log(mapArr3)

// FILTER FUNCTION
console.log("FILTER FUNCTION")
// EXAMPLE1
console.log("FILTER FUNCTION EXAMPLE1")
let arr8=["one", "two", "three", "four", "five"]
let filterArr=arr8.filter((val)=>{
    return val>5
})
console.log(filterArr)

// EXAMPLE2
console.log("FILTER FUNCTION EXAMPLE2")
let arr9=[1,2,3,4,5,6,7,8,9,10]
let filterArr1=arr9.filter((val)=>{
    return val>5
})
console.log(filterArr1)

// EXAMPLE3
console.log("FILTER FUNCTION EXAMPLE3")
let arr10=["one", "two", "three", "four", "five"]
let filterArr2=arr10.filter((val)=>{
    return val=""
})
console.log(filterArr2)

// FIND FUNCTION
console.log("FIND FUNCTION")
// EXAMPLE1
console.log("FIND FUNCTION EXAMPLE1")
let arr11=[1,2,3,4,5,6,7,8,9,10]
let findArr=arr11.find((val)=>{
    return val>5 // first value greater than 5 is printed
})
console.log(findArr)

// EXAMPLE2
console.log("FIND FUNCTION EXAMPLE2")
let arr12=[1,2,3,4,5,6,7,8,9,10]
let findArr1=arr12.find((val)=>{
    return val<5 // first value lesser than 5 is printed 
})
console.log(findArr1)

// EXAMPLE3
console.log("FIND FUNCTION EXAMPLE3")
let arr13=[1,2,3,4,5,6,7,8,9,10]
let findArr2=arr13.find((val)=>{
    return val==5 // prints the value that is equal to 5 
})
console.log(findArr2)

// EXAMPLE4
console.log("FIND FUNCTION EXAMPLE4")
let arr14=[2,3,4,5,6,7,8,9,10]
let findArr3=arr14.find((val)=>{
    return val!=5 // first value that is not equal to 5 is printed 
})
console.log(findArr3)

// SOME FUNCTION
console.log("SOME FUNCTION")
// EXAMPLE1
console.log("SOME FUNCTION EXAMPLE1")
let arr15=[1,2,3,4,5,6,7,8,9,10]
let someArr=arr15.some((val)=>{
    return val>5 // value >5 is present in the array,prints true
})
console.log(someArr)

// EXAMPLE2
console.log("SOME FUNCTION EXAMPLE2")
let arr17=[1,2,3,4,5,6,7,8,9,10]
let someArr2=arr17.some((val)=>{
    return val>10 // value >10 is not present in the array,prints false
})
console.log(someArr2)

// EXAMPLE3
console.log("SOME FUNCTION EXAMPLE3")
let arr18=[1,2,3,4,5,6,7,8,9,10]
let someArr3=arr18.some((val)=>{
    return val==10 // value =10 is present in the array,prints true
})
console.log(someArr3)

// EVERY FUNCTION
// EXAMPLE1
console.log("EVERY FUNCTION")
console.log("EVERY FUNCTION EXAMPLE 1")
let arr19=[1,2,3,4,5,6,7,8,9,10]
let everyArr=arr19.every((val)=>{
    return val>5
})
console.log(everyArr)

// EXAMPLE2
console.log("EVERY FUNCTION EXAMPLE 2")
let arr20=[6,7,8,9,10]
let everyArr1=arr20.every((val)=>{
    return val>5
})
console.log(everyArr1)



