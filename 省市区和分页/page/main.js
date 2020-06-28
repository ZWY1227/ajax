var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/pading";

let express = require("express")
let path = require("path")
let app = express()
app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")
// 1,没有ajax的(服务端渲染)分页
// app.get("/index", (req, res) => {
//     res.render("index1")
// })
// //2, 普通分页页面
app.get("/", (req, res) => {
    res.render("index")
})
// //3,点击查看更多
// app.get("/zuoye", (req, res) => {
//     res.render("zuoye")
// })
// //4,滚动效果
// app.get("/", (req, res) => {
//     res.render("scrollpage")
// })
// //(1)纯服务端渲染的分页,服务端直接渲染页面
// app.get("/new", (req, res) => {
//     let pagesun = 3;//每页条数
//     let page = req.query.page || 1//前端传过来的页数
//     if (page <= 0) { page = 1 }
//     let realpage = (parseInt(page - 1)) * pagesun//真实的页码数据
//     MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//         if (err) throw err;
//         var dbase = db.db("pading");
//         dbase.collection("news").find().skip(realpage).limit(pagesun).toArray(function (err, date) { // 返回集合中所有数据
//             if (err) throw err;
//             console.log(date)
//             //    然后查询新闻的总数
//             dbase.collection("news").find().count().then((value) => {
//                 let sum = value;//总条数；
//                 let pages = Math.ceil(sum / pagesun)
//                 res.render("index1", {
//                     "arr": date,//当前页对应新闻信息
//                     page: page,//当前页码
//                     pagesun: pagesun,//每页显示条数
//                     sum: sum,//总条数
//                     pages: pages
//                 })
//             }).catch((reason) => {
//                 console.log(reason)
//             })
//             db.close();
//         });
//     });
// })
// // (2,3)普通分页和查看更多的服务端处理接口,暴漏接口,前端拿数据来渲染
app.get("/news", (req, res) => {
    for(var i=0;i<1000000000;i++);
    let pagesun = 3;//每页条数
    let page = req.query.page || 1//前端传过来的页数
    if (page <= 0) { page = 1 }
    // (page<=0)&&(page=1)
    let realpage = (parseInt(page - 1)) * pagesun//真实的页码数据
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
        if (err) throw err;
        var dbase = db.db("pading");
        dbase.collection("news").find().skip(realpage).limit(pagesun).toArray(function (err, date) { // 返回集合中所有数据
            if (err) throw err;
            //    然后查询新闻的总数
            dbase.collection("news").find().count().then((value) => {
                let sum = value;//总条数；
                let pages = Math.ceil(sum / pagesun)
                res.json({
                    arr: date,//当前页对应新闻信息
                    page: page,//当前页码
                    pagesun: pagesun,//每页显示条数
                    sum: sum,//总条数
                    pages: pages
                })
            }).catch((reason) => {
                console.log(reason)
            })
            db.close();
        });
    });
})
// 滚动加载
// app.get("/srcoll", (req, res) => {
//     for(let i=0;i<1000000000;i++);
//     let pagesun = 4;//每页条数
//     let page = req.query.page || 1//前端传过来的页数
//     if (page <= 0) { page = 1 }
//     let realpage = (parseInt(page - 1)) * pagesun//真实的页码数据
//     MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//         if (err) throw err;
//         var dbase = db.db("pading");
//         dbase.collection("news").find().skip(realpage).limit(pagesun).toArray(function (err, date) { // 返回集合中所有数据
//             if (err) throw err;
//             res.json(date) 
//         })
//         db.close(); 
//     });
// })
// //4,滚动效果
// app.get("/", (req, res) => {
//     res.render("scrollpage")
// })
// app.get("/scroll",(req,res)=>{
//     // console.log(req.query.page)
//     for(let i=0;i<1000000000;i++);
//     let pagesum = 4;//每页条数
//     let page = req.query.page || 1;//如果前端没传数据就默认为1
//     if(page<=0){page==1};
//     let realpage=(parseInt(page-1))*pagesum;
//     MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//         if (err) throw err;
//                 var dbase = db.db("pading");
//                 dbase.collection("news").find().skip(realpage).limit(pagesum).toArray(function (err, date) { // 返回集合中所有数据
//                     if (err) throw err;
//                     //    然后查询新闻的总数
//                     dbase.collection("news").find().count().then((value) => {
//                         let sum = value;//总条数；
//                         let pages = Math.ceil(sum / pagesum)
//                         res.json({
//                             arr: date,//当前页对应新闻信息
//                             page: page,//当前页码
//                             pagesum: pagesum,//每页显示条数
//                             sum: sum,//总条数
//                             pages: pages
//                         })
//                     }).catch((reason) => {
//                         console.log(reason)
//                     })
//                     db.close();
//                 })
//     })
// })

app.listen(3000, () => {
    console.log("浏览器在3000端口启动成功了")
})