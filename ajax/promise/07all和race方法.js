let fs=require("fs").promises

let f1 = fs.readFile("aa.txt","utf-8");
let f2 = fs.readFile("b.txt","utf-8");
let f3 = fs.readFile("c.txt","utf-8");


// Promise.all([f1,f2,f3]).then((value)=>{
//     console.log(value)//只有三个文件都读取成功了才返回
// }).catch((reason)=>{
//     console.log(reason)//如果有一个是错误的就返回那个错误的原因
// })//all就是需要所有的意思,就是全部都满足
Promise.race([f1,f2,f3]).then((value)=>{
    console.log(value)
}).catch((reason)=>{
    console.log(reason)
})//race就是跑的最快,成功就去跑的就最快的那个
//错误就返回错误的那个错误原因