let express=require("express")
let path=require("path")
let app=express()
 app.use(express.static(path.join(__dirname,"public")))
 app.set("view engine","ejs")
 app.get("/",(req,res)=>{
     res.render("index")
 })
 app.listen(3000,()=>{
     console.log("浏览器在3000端口启动成功了")
 })