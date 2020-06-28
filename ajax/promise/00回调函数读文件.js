let fs=require("fs")
fs.readFile("./name.txt","utf8",(err,data)=>{
    if(err) throw err;
    fs.readFile(data,"utf8",(err,data)=>{
        if(err) throw err;
        console.log(data)
    })
})