// FOR LOOP
console.log("FOR LOOP")
let arr=[5,10,15,20]
for(let i=0; i<5; i++){
console.log(i)
console.log(arr[i])
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

// STRING FUNCTION
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
console.log("SORT FUNCTION")
let arr1=[1,2,4,5,3,6,8,7]
console.log(arr1.sort())

console.log("REVERSE FUNCTION")
console.log(arr1.reverse())

console.log("ARRAY TO STRING")
console.log("TOSTRING FUNCTION")
let arr2=["one", "two", "three", 4, 5, 6]
console.log(arr2.toString())

// PUSH FUNCTION
console.log("PUSH FUNCTION")
console.log(arr2.push("red"))
console.log(arr2)

// POP FUNCTION
console.log("POP FUNCTION")
console.log(arr2.pop())
console.log(arr2.pop("4"))
console.log(arr2)

// SHIFT FUNCTION
console.log("SHIFT FUNCTION")
console.log(arr2.shift("1"))
console.log(arr2)

// UNSHIFT FUNCTION
console.log("UNSHIFT FUNCTION")
console.log(arr2.unshift(5))
console.log(arr2)

// INCLUDES FUNCTION
console.log("INCLUDES FUNCTION")
console.log(arr2.includes("three"))
console.log(arr2.includes("four"))

// JOIN FUNCTION
console.log("JOIN FUNCTION")
console.log(arr2.join(". "))
console.log(arr2.join("% "))

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
