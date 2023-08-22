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
// console.log("WITHOUT PARAMETER EXAMPLE 2")
// fuction muldiv(){
//     console.log(5*10/2)
// }
// muldiv()

// FUNCTION WITH PARAMETER
// EXAMPLE1
console.log("WITH PARAMETER EXAMPLE 1")
console.log("FUNCTION WITH PARAMETER")
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