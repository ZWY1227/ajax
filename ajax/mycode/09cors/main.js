let express=require("express")
let app=express()
// 这里设置中间件，*表示拦截所有路由,next表示放行
// 引入cookie
let cookieParser=require("cookie-parser")
app.use("*",(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:3000")
    res.setHeader("Access-Control-Allow-Credentials",true)
    res.setHeader("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS")
    next()
})
// 使用cookie
app.use(cookieParser())

app.post("/a",(req,res)=>{
    res.cookie("name","zwy")
    res.json({name:"zwy"})
})
app.listen("4000",()=>{
    console.log("服务器在4000端口启动成功了")
})