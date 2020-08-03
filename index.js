/*const arr = [] ;
const arr2 = [1,2,true,"Hello"]

arr[500]=1234;
arr.push(54321);

const arr3 = [1,2,3,5];
arr3[3]=20;

console.log(arr3);*/



/*const obj = {
    key: 2,
    _key2: "Hello",
    'key-2': "value"
};

console.log(obj.key)
console.log(obj._key2)
console.log(obj["key-2"])*/

/*const obj = {
    arr:[
        {name: "Otis"},
        false
    ]
};

console.log(obj.arr[0].name)*/


/*var arr = 
    {
    names:[
        "John",
        "Doe",
        {firstName: "Susan",lastName: "Smith"}
    ]
    ,
    "John Doe"
};

console.log(obj.names[3].lastName)*/

// const obj = null;
// const obj2 = undefined;

// const num = 20;
// const obj = {
//     key: 20,
//     key3: 50
// }

// console.log(!!obj)

// let result = 1+2;

// result +=2;
// //เท่ากับ
// result = result + 2;

// result -= 3;
// //เท่ากับ
// result /= 3;
// result *= 3;
// result %= 3;

// result = result + 1;
// //เท่ากับ
// result += 1;
// result ++;
// ++result;

// result = result - 1;
// //เท่ากับ
// result -= 1;
// result --;
// --result;

// let result = 2 + 5;
// let result2 = 20 + 3;
// let result3 = 50 + 5;

// result += (result2+result3); // result = result + (result2+result3)
// result += result2+result3; // result = result + (result2+result3), += ทำหลังสุดเสมอ

// const numStr = "100";
// console.log((+numStr) + 50);

//console.log(ค่าที่แปลงเลขไม่ได้ + เลข); จะได้ NaN

// let firstNum = 2;
// let secNum = 3 ;

// console.log((firstNum += 5) >= 10);
// console.log(firstNum);

// console.log( true && false);

// console.log( ((firstNum += 5) <= 10) || ((secNum += 5)>= 10));
// console.log(firstNum,secNum)

// console.log(200 == "200");
// console.log(200 === "200");
// console.log(200 != "200");
// console.log(200 !== "200");

// const someVar = "50" + 20;
// console.log(someVar,typeof someVar);
// console.log(typeof undefined);
// console.log(typeof {},typeof null, typeof NaN);


// const arr = [1,2,3,4];
// // const arr2 = arr;
// const arr2 = [1,2,3,4];

// console.log(arr === arr2);



// arr2[1] = 20;

// console.log(arr)
// console.log(arr2)


// const arr = [1,2,3,4];
// const arr2 = [...arr,10,5];
// const arr3 = [...arr,...arr2];

// console.log(arr,arr2,arr3);
// console.log(arr !== arr2);

// const obj1 = { num1: 10, num2: 20}
// const obj2= {...obj1};
// obj2.num1 = 20;

// console.log(obj2);

// const obj1 = { num1: 10, num2: 20}

// const num1 = obj1.num1
// const num2 = obj1.num2

// const {num1,num2} = obj1

// const str = "Hello"
// let result = 50

// if (str.length !==  0){}
// if((result += 50) >= 100){}

// const arr = [1,2,3,4]
// const obj = {key: 1, key: 2, key: 3}

// for (const a in obj) {
//     console.log(a)
// }
// for (const b of obj){
//     console.log(b)
// }

// function sum() {

// }

// let sum = (num1,num2) => {
//     return num1+num2;
// }
// console.log(sum(1));

// const func = param => {
//     return parem;
// }
// //เท่ากับ
// function func(parem){
//     return parem;
// }
// //เท่ากับ
// const func = param => param

// const multiply5 = num => num * 5
// //เท่ากับ
// function multiply5(num){
//     return num*5
// }
// const multiply5 = (num=1) => num * 5 //รันไม่เป็น NaN
// console.log(multiply5());

// const someFunc = ({name} = {}) => console.log(name)

/*รูปเต็ม 

const someFunc = ({name} = {}) => {
    console.log(name);
} 
*/
//someFunc ({name: "asd",age: 24})

// function someFunc(name,...parem){
//     console.log(name)
//     console.log(parem)
// }
// someFunc("name",1,2,3,4,5);
// someFunc("name",3,4,5);
// someFunc("name",1,2);

/*เปลี่ยนเป็น arr หมดเลย

function someFunc(name,...parem){
    //console.log(name)
    console.log(parem)
}
someFunc("name",1,2,3,4,5);
someFunc("name",3,4,5);
someFunc("name",1,2);*/

// var result = 20+5;
// if(result > 100){
//     var name = "abc"
// }

// console.log(name);

// //------------

// var result = 20+5;
// var name;
// if(result > 100){
//    name = "abc"
// }

// console.log(name);

// //ใช้ let แทน var ไม่ควรใช้เลยเพราะมีปัญหา

// let result = 20+5;
// if(result > 100){
//     let name = "abc"
// }

// console.log(name); 
// // error hoisting 

// const timeout = 1000;

// setTimeout(()=>{
//     console.log("asdasafsdfs")

// }, timeout)

// function sFunc (name, callback = () => undefined){
//     if (typeof callback !== "function") return;

//     const concatenateString = "Hello" + name 
//     callback(concatenateString);

// }
// sFunc("Nachi", function(concatenateString){

// console.log(concatenateString)
// })

// sFunc("Yeah",() => {
//     console.log(concatenateString)

// })

//object

// const num1 = 20;
// const obj = {
//     num1: num1
// }
// // num1: num1 ชื่อเหมือนกัน เขียนใหม่เป็น
// const obj = { num1 }

// const someFunc = () => new Promise (resolve, reject) => {
//     resolve("aaaaaaaa");

//     reject("vvvvvvdfsf");
// };

// someFunc()
// .then((value) =>{
//     console.log(value);
// })
// .then((value) => {
//     console.log(value);
// })
// .catch((value) =>{
//     console.log(value);
// })
// .finally(() =>{
   
// })

function DonutShop(){
    function queue(){
        console.log("Wait........");
        return new Promise((resolve)=>{
            
        })
    }
}