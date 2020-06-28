let fs=require("fs")
function readFile(file){
    return new Promise((resolve,reject)=>{
        fs.readFile(file,"utf-8",(err,data)=>{
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
})