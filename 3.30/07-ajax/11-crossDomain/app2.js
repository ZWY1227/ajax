let epxress = require("express");
var cookieParser = require('cookie-parser')
let app = epxress();
app.use(cookieParser())

app.get("/stu",(req,res)=>{
    // let cb = req.query.callback;
    // console.log(cb); // f仅仅是一个函数名  jQuery111309460106681958098_1585639053298
    // 返回一个函数调用  把数据当作形参传入
    // res.send(cb+"("+JSON.stringify({code:0,stu:{name:"wangcai",age:100}})+")");

    // res.json({code:0,stu:{name:"wangcai",age:100}})
    res.jsonp({code:0,stu:{name:"wangcai",age:100}})
})
app.listen(4000,()=>{
    console.log("服务器在4000端口启动了~")
})





/* app.use("*",(req,res,next)=>{
    // res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.setHeader("Access-Control-Allow-Origin","*");
    // 允许客户端带cookie
    res.setHeader("Access-Control-Allow-Credentials",true);
    // 允许客户端复杂请求
    res.setHeader("Access-Control-Allow-Methods","POST,GET,PUT,DELETE,OPTIONS");
    next();
}) */