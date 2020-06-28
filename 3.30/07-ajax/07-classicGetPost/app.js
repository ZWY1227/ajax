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
        res.send(`对不起，该用户名${username}已被注册了~`)
    }else{
        res.send(`恭喜你，该用户名${username}可用`)
    }
})

app.post("/check",(req,res)=>{
    let username = req.body.username;
      if(users.find(user=>user==username)){
        res.send(`对不起，该用户名${username}已被注册了~`)
    }else{
        res.send(`恭喜你，该用户名${username}可用`)
    }
})
app.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})





