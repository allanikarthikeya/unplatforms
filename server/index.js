const express=require("express")
const bodyParser=require("body-parser")
const cors=require("cors")
const app=express()
const mysql =require('mysql2')
app.listen(3001,()=>{
    console.log("running on port 3001")
})
const db=mysql.createPool({
    host:'localhost',
    user:'root' ,
    password:'Allani@14',
    database:'datedatabase',
});
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.post('/api/insert',(req,res)=>{
    const taskname=req.body.taskname;
    const ms=parseInt(req.body.ms);
    const s=parseInt(req.body.s);
    const m=parseInt(req.body.m);
    const h=parseInt(req.body.h);
    console.log(taskname,ms,s,m,h)
    const sqlinsert="INSERT INTO tasks (task,ms,s,m,h,taskdate) VALUES (?,?,?,?,?,curdate())";
    db.query(sqlinsert,[taskname,ms,s,m,h],(err,result)=>{
console.log("result is",result)
    })
})
app.get('/api/getusers',(req,res)=>{
    const sqlselect="SELECT * FROM tasks where taskdate+7>=curdate()";
    db.query(sqlselect,(err,result)=>res.send(result))
})
app.delete('/api/deleteone/:id',(req,res)=>{
    let ids=+(req.params.id)
    const sqldelete="DELETE FROM tasks WHERE id=?"
    db.query(sqldelete,ids,(err,result)=>{
    if(result) res.send({messsage:"deleted successful"})
    }
    )
})
app.put("/api/update",(req,res)=>{
    const updatetask=req.body.updatetask;
    const ids=req.body.id;
    const sqlupdate="UPDATE tasks SET task=? where id=?";
    db.query(sqlupdate,[updatetask,ids],(err,result)=>{
        if(result) res.send({messsage:"updated successful"})
    })
})
app.put('/api/updatetime',(req,res)=>{
    const millisec=req.body.ms;
    const sec=req.body.s;
    const m=req.body.m;
    const h=req.body.h;
    const ids=req.body.id;
    const sqlupd="UPDATE tasks SET ms=?,s=?,m=?,h=? WHERE id=?";
    db.query(sqlupd,[millisec,sec,m,h,ids],(err,result)=>{
        if(result) res.send({messsage:"time updated successfully" })
    })
})
app.get("/api/alltasks",(req,res)=>{
    const sqlins="SELECT task,ms,s,m,h, DATE_FORMAT(taskdate,'%Y-%m-%d') as taskdate FROM tasks";
    db.query(sqlins,(err,result)=>{res.send(result)})
})