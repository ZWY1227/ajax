let express=require("express")
let app=express()
let path=require("path")
let bodyParser=require("body-parser")
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
app.get("/",(req,res)=>{
    res.render("regist")
})
let arr=["zwy","yulei"]
// 使用get
// app.get("/regist",(req,res)=>{
//     let name=req.query.username
//     if(arr.find(item=>item==name)){
//         res.send({code:0,msg:"这个用户已经被注册了"})
//     }else{
//         res.json({code:0,msg:"这个用户可以被注册"})
        
//     }
// })
// 使用post
app.post("/regist",(req,res)=>{
    // let name=req.body.username
    // if(arr.find(item=>item==name)){
    //     res.send({code:0,msg:"这个用户已经被注册了"})
    // }else{
    //     res.json({code:0,msg:"这个用户可以被注册"}) 
    // }
})
// 使用ajax
// app.get("/regist",(req,res)=>{
//     let name=req.body.username
//     if(arr.find(item=>item==name)){
//         res.send({code:0,msg:"这个用户已经被注册了"})
//     }else{
//         res.json({code:0,msg:"这个用户可以被注册"}) 
//     }
// })

app.listen("3001",()=>{
    console.log("浏览器在3001端口启动成功了")
})