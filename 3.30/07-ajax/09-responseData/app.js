let epxress = require("express");
var bodyParser = require('body-parser')

let app = epxress();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.render("reg.ejs")
})
let users = ["admin","wangcai"];
app.get("/check",(req,res)=>{
    let username = req.query.username;
      if(users.find(user=>user==username)){
        // res.send("对不起，该用户已被注册了~")
        // res.send("<strong style='color:#f00'>对不起，该用户已被注册了~</strong>")
        // {code:0,msg:"对不起，该用户已被注册了~"}  // json对象
        // JSON.stringify({code:0,msg:"对不起，该用户已被注册了~"}) // json字符串
        // res.send(JSON.stringify({code:0,msg:"对不起，该用户已被注册了~"}))
        
        // send内部会把JSON对象转成JSON字符串
        // res.send({code:0,msg:"对不起，该用户已被注册了~"}); // 返回的依然是JSON字符串

        res.json({code:0,msg:"对不起，该用户已被注册了~"})

    }else{
        // res.send("恭喜你，该用户名可用...")
        // res.send("<strong style='color:#0f0'>恭喜你，该用户名可用...</strong>")
        //  res.send(JSON.stringify({code:1,msg:"恭喜你，该用户名可用..."}))
    }
})
app.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})





