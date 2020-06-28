let epxress = require("express");
var bodyParser = require('body-parser')

let app = epxress();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.render("reg.ejs")
})
// 模拟数据库中有用户名 
let users = ["admin","wangcai"];
app.post("/doreg",(req,res)=>{
    let username = req.body.username.trim();
    let password = req.body.password.trim();
    let repassword = req.body.repassword.trim();
    // 检测用户名在数据库是否存在
    if(users.find(user=>user==username)){
        // 用户名已存在
        res.send("<h2>对不起，该用户已被注册了~</h2>")
    }else{
        res.send("<h2>恭喜你，该用户名可用...</h2>")
    }
})
app.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})


// users.find(user=>user==username)
/* 
    let res =  users.find(function(user){
      reutrn  user == username
    });

    打到返回ture  res就是true   没有找到返回false  res就是false
 */





