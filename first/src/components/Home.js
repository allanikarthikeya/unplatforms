import React from 'react'
import StopWatch from './StopWatch'
import './Home.css'
import { useState,useEffect } from 'react'
import axios from "axios"
function Home() {
  let[task,settask]=useState("");
  let [tasklist,settasklist]=useState([]);
  let[status,setstatus]=useState(0);
  let [updatetask,setupdatetask]=useState("")
  let [updateid,setid]=useState(-1);
  let [call,setcall]=useState(0);
  let [resumeobj,setresumeobj]=useState({})
  let [resumeid,setresumeid]=useState(-1);
  useEffect(()=>{
    axios.get('http://localhost:3001/api/getusers')
    .then((res)=>settasklist(res.data))
    .catch((err)=>console.log("err in getting is",err))
  },[])
  let deletetask=(obj)=>{
  console.log(obj)
  console.log(obj.id)
    axios.delete(`http://localhost:3001/api/deleteone/${+obj.id}`)
    .then((res)=>  window.location.reload())
    .catch((err)=>console.log("err in deleting is",err))
  }

  let update=(obj)=>{
      setid(obj.id)
      setstatus(1)
  }
  let savetask=()=>{
    window.location.reload();
  }
  axios.put("http://localhost:3001/api/update",{
        updatetask:updatetask,id:updateid
      }).then((res)=>console.log(res))
      .catch((err)=>console.log("err in updating",err))
  let resumetask=(obj)=>{
    setcall(1)
    setresumeid(obj.id)
    setresumeobj(obj)
    console.log(resumeobj)
  }
  return (
    <div>
    <div className='d-flex pt-3'>
        <div className='inputwork pe-5'> 
            <input type='text' name='work' className='form-control' placeholder='What are you working on?'
            onChange={(e)=>{
                settask(e.target.value);
            }}/>
        </div>
        <div>
        <StopWatch tasks={task}/>
        </div>
    </div>
    <h5 className='week pb-2'>This week</h5>
    {
      tasklist.map((obj)=>
       <div className='taskllists d-flex justify-content-between border border-dark'>
       <div className='pt-3 pb-1 ps-3 text-muted'>
        <h6>{obj.task}</h6>
       </div>
       {(call==1 && obj.id==resumeid)? <StopWatch obj={resumeobj}/>:
       <div className='p-2 d-flex'>
        <h4>{obj.h>=10?obj.h:"0"+obj.h}&nbsp;:&nbsp;{obj.m>=10?obj.m:"0"+obj.m}&nbsp;:&nbsp;{obj.s>=10?obj.s:"0"+obj.s}&nbsp;:&nbsp;{obj.ms>=10?obj.ms:"0"+obj.ms}</h4>
       <button className='btn ms-3' onClick={()=>deletetask(obj)}>Delete</button>
       <button className='btn ms-3' onClick={()=>update(obj)} >Update</button>
      {(status==1 && obj.id==updateid) && <input onChange={(e)=>{setupdatetask(e.target.value)}} placeholder='Write updated task name' className='ms-2'/>}
      {(status==1) && <button onClick={savetask} className='btn ms-3'>SAVE</button>}
    <button className='btn ms-3' onClick={()=>resumetask(obj)}>Resume</button>
       </div>
}
      </div>
      )
}
    </div>
  )
}

export default Home
