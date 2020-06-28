let express=require("express")
let app=express()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("regist")
})
let arr=["admin","yudalei","zhang"]
app.get("/regist",(req,res)=>{
    // console.log(req.query.username)
    let username=req.query.username
    if(arr.find(item=>item==username)){
        res.send("对不起，该用户名已经被注册")
    }else{
        res.send("这个用户名可以使用")
    }
})
app.listen("3000",()=>{
    console.log("服务器在3000端口启动成功了")
})