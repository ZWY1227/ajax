// let express=require("express")
// let app=express()

// app.get("/proxy",(req,res)=>{
//     res.send({code:"0","name":"恭喜你请求到数据了"})
// })
// app.listen(4000,()=>{
//     console.log("服务器在4000端口启动成功了")
// })
// 第二遍模仿
let express=require("express")
let app=express()
app.get("/proxy",(req,res)=>{
    res.send({code:"0",msg:"张婉莹拿到数据量，哈哈哈"})
})
app.listen(4000,()=>{
    console.log("浏览器在4000端口启动成功了")
})