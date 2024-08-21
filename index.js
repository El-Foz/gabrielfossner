const express=require('express')
const bodyParser=require("body-parser")
const { join }=require("path")
const app=express()
const admin=require('./admin')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./blogposts.db');

app.use(express.static(join(__dirname+"/public")))-
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb"  }))
app.use(bodyParser.json({limit: "50mb" }))

app.use("/admin", admin)
app.get('/', (req, res)=>{
    res.sendFile(join(__dirname,"/html/index.html"))
})
app.get('/uploadblog', (req, res)=>{
    res.sendFile(join(__dirname, "/html/newpost.html"))
})
app.all('/blogposts', (req, res)=>{
    db.each("SELECT * FROM BLOGPOSTS", (err, row)=>{
        if(err) console.error(err)
        console.log(row)
        res.json(row)
    })
})
app.post("/uploadnewblog", (req, res)=>{
    
})
app.listen(6969, ()=>{
    console.log("Im in")
})