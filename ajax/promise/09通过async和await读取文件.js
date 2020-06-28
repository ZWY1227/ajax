// let fs=require("fs")
// function readFile(file){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(file,"utf-8",(err,data)=>{
//             if (err) reject(err);
//             resolve(data)
//         })
//     })
// }
// readFile("name.txt").then((value)=>{
//     // console.log(value);  // age.txt
//     return readFile(value)
// },(reason)=>{
//     console.log(reason)
// }).then((value)=>{
//     console.log(value)
// },(reason)=>{
//     console.log(reason)
// })
// 上面的代码还是不够优雅,怎么半呢,让我们用async awite来看看
let fs=require("fs").promises
async function readFile(file){
    let res=await fs.readFile(file,"utf8")
    let res1=await fs.readFile(res,"utf8")
    return res1;//此处返回的是个promise
}
//所以需要then来拿到结果
readFile("name.txt").then((value)=>{
     // async和await它让我们的代码看起来更像同步代码
    console.log(value)
})