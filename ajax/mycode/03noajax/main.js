let express=require("express")
let app=express()
let bodyParser=require("body-parser")
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("regist")
})
// bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
let name=["admin","zwy"]
app.post("/doregist",(req,res)=>{
    // console.log(req.body.username)
    let username=req.body.username
    if(name.find(item=>item==username)){
        res.send("<h1>对不起，该用户名已经被注册过</h1><a href='/'>点击返回</a>")
    }else{
        res.send("<h1>亲，用户名可以被使用</h1><a href='/'>点击返回</a>")
    }
})
app.listen("3000",()=>{
    console.log("服务器在3000端口启动成功了")
})