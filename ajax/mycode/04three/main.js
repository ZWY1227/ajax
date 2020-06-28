let express=require("express")
let app=express()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("regist")
})
let arr=["zwy","yulei"]
app.get("/regist",(req,res)=>{
    let name=req.query.username
    if(arr.find(item=>item==name)){
        // res.send(`这个用户名${name}已经被注册`)//渲染文本
        // res.send("<h1 style='background:red'>这个用户名已经被注册</h1>")//渲染html
        res.send({code:0,msg:"这个用户已经被注册了"})
    }else{
        // res.send(`这个用户名${name}可以使用`)//渲染文本
        // res.send("<h1 style='background:red'>这个用户名可以用</h1>")//渲染html
        // res.send({code:0,msg:"这个用户可以被注册"})
        res.json({code:0,msg:"这个用户可以被注册"})
        
    }
    

})
app.listen("3001",()=>{
    console.log("浏览器在3001端口启动成功了")
})