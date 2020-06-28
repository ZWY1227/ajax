let express=require("express")
let app=express()
app.get("/jsonp",(req,res)=>{
    res.jsonp({code:"0","msg":"恭喜你使用JQ的jsonp获得了数据"})
    // console.log(req.query.callback)
    let cd=req.query.callback//传过来函数名cd
// 返回：：：：：调用这个函数cd，并传参{code:"0","msg":"恭喜你使用JQ的jsonp获得了数据"}
//res.send(cd+"("+JSON.stringify({code:"0","msg":"恭喜你使用JQ的jsonp获得了数据"}+")"))
})
app.listen(4000,()=>{
    console.log("服务器在4000端口启动成功了")
})