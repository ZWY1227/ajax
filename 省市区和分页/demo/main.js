let express=require("express")
let app=express()

app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
let data=require("./data.json")
app.get("/province",(req,res)=>{
    let province=[]
    data.forEach((item)=>{
        // 获得了所有的省
        province.push(item.n)  
    })
    res.json(province)
})
app.get("/city",(req,res)=>{
    let cities=[]
    let province=req.query.province;
    data.forEach((item)=>{
        if(item.n==province){
            item.s.forEach((item1)=>{
                cities.push(item1.n)
                // 获得了所有的市
                
            })
        }
       
    })
    res.json(cities)
})
app.get("/area",(req,res)=>{
    let areas=[]
    let city=req.query.city;
    data.forEach((item)=>{
            item.s.forEach((item1)=>{
              if(item1.s){
                  if(item1.n==city){
                      item1.s.forEach(item2=>{
                        areas.push(item2.n)
                      })
                  }
              }
                // 获得了所有的市 
            })
        })
    res.json(areas)

})







app.listen(3000,()=>{
    console.log("服务器在3000端口启动成功了")
})
