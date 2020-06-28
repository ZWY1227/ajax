let express=require("express")
let app=express()
app.get("/jsonp",(req,res)=>{
    let f1=req.query.callback
    res.send(f1+"("+JSON.stringify({code:'0','msg':'恭喜你拿到数据'})+")")
})
app.listen(4000,()=>{
    console.log("服务器在4000端口启动成功了")
})