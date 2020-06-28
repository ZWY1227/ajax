let epxress = require("express");
let http = require("http")
var bodyParser = require('body-parser')
let path = require("path")
let app = epxress();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(epxress.static(path.join(__dirname, "public")))

app.get("/",(req,res)=>{
    res.render("reg.ejs")
})

app.get("/jsonp",(req,res)=>{
    // console.log(req.query.callback);
    let cb = req.query.callback; // f1
    // res.send("alert('hello')")
    res.send(cb+"('hello')")
})


// app.get("/proxy",(req,res)=>{
//     let url = req.query.realUrl;
//     console.log(url)
//     http.get(url,(resonse)=>{
//         let data = "";
//         resonse.on("data",(chunk)=>{
//             data+=chunk;
//         })
//         resonse.on("end",()=>{
//             // console.log(data)
//             res.json(data)
//         })
//     })
// })
app.listen(3000,()=>{
    console.log("服务器在3000端口启动了~")
})





