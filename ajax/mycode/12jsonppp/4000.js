let express=require("express")
let app=express()
app.get("/jsonp",(req,res)=>{
    console.log(req.query.callback)//打印出来f1
    let f1=req.query.callback
    res.send(f1+"("+JSON.stringify({code:'0','msg':'恭喜你已经拿到数据了'})+")")
    // res.send({code:'0','msg':'恭喜你已经拿到数据了'})
    // console.log("111111111")
})
app.listen(4000,()=>{
    console.log("浏览器在4000端口启动成功了")
})