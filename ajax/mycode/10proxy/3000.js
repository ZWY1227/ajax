// let express=require("express")
// let http=require("http")
// let path=require("path")
// let app=express()
// app.set("view engine","ejs")
// app.use(express.static(path.join(__dirname,"public")))
// app.get("/",(req,res)=>{
//     res.render("index")
// })
// app.get("/proxy",(req,res)=>{
//     // console.log(req.query.realurl)
//     // 使用代理向端口为4000的服务器索要数据
//     // 此时data就是索要的数据
//     let url=req.query.realurl
//     http.get(url,(reason)=>{
//         let data=""
//         reason.on("data",(trunk)=>{
//             data+=trunk
//         })
//         reason.on("end",()=>{
//             res.send(data)
//         })
//     })
   

// })
// app.listen(3000,()=>{
//     console.log("服务器在3000端口启动成功了")
// })
// 第二遍联系

let express=require("express")
let http=require("http")
let app=express()
let path=require("path")
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/proxy",(req,res)=>{
    // console.log(req.query.realurl)
    let url=req.query.realurl
    let data=""
    http.get(url,(reason)=>{
        reason.on("data",(trunk)=>{
            data+=trunk
        })
        reason.on("end",()=>{
            // 这里代理服务器得到是端口4000的数据
            // console.log(data)
            // 然后代理服务器把数据返回给3000端口
            res.json(data)
        })
    })

})
app.listen(3000,()=>{
    console.log("浏览器在3000端口启动成功了")
}
)
