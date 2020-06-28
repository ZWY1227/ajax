let express=require("express")
let app=express()
let path=require("path")
app.set("view engine","ejs")
app.use(express.static(path.join(__dirname,"public")))
// let bodyParser=require("body-parser")

app.get("/",(req,res)=>{
    res.render("index")
})
app.listen("3000",()=>{
    console.log("服务器在3000端口启动成功了")
})