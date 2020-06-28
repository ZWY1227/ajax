// let fs=require("fs")
// let p=new Promise((resolve,reject)=>{
//     fs.readFile("name.txt","utf8",(err,data)=>{
//         if(err) throw err;
//         resolve(data)
//     })
// });
// p.then((value)=>{
//     return fs.readFile(value,"utf8",(err,data)=>{
//         console.log(data)
//     })
// },(reason)=>{
//     console.log(reason)
// })
let fs=require("fs")
function readFile(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,"utf8",(err,data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
}
readFile("./name.txt").then((value)=>{
   return readFile(value)
},(reason)=>{
    console.log(reason)
}).then((value)=>{
    console.log(value)
},(reason)=>{
    console.log(reason)
})