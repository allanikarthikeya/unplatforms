import React, { useEffect, useState} from 'react'
import axios from "axios"
import './StopWatch.css'
function StopWatch(props) {
    console.log("props is",props)
    let [timer,settimer]=useState({ms:0,s:0,m:0,h:0})
    let[interv,setinterv]=useState();
    let [status,setstatus]=useState(0);
    let [stop,setstop]=useState(0)
   useEffect(()=>{
    if(props.obj) {settimer({ms:props.obj.ms,s:props.obj.s,m:props.obj.m,h:props.obj.h});
    setstop(1);
   }
   },[])
 let startime=()=>{
      run();
      setinterv(setInterval(run,1));
      setstatus(1);
    }
    let endtime=(time)=>{
        clearInterval(interv)
        console.log(timer)
        submittasks()
        window.location.reload();
    }
    let endtime1=(times)=>{
        clearInterval(interv)
        console.log(times)
        submittasks()
        axios.put("http://localhost:3001/api/updatetime",{
            ms:times.ms,s:times.s,m:times.m,h:times.h,id:props.obj.id
        }).then((res)=>console.log(res))
        .catch((err)=>console.log("err in updating time is",err))
        window.location.reload();
    }
    let submittasks=()=>{
         axios.post("http://localhost:3001/api/insert",{taskname:props.tasks,ms:timer.ms,s:timer.s,m:timer.m,h:timer.h})
         .then(()=>{
            console.log("successful insert")
         }).catch((err)=>console.log("err in sending ",err))
    }
    let run=()=>{
        if(timer.ms==100){
            timer.s++;
            timer.ms=0;
        }
        if(timer.s==60){
            timer.m++;
            timer.s=0;
        }
        if(timer.m==60){
            timer.h++;
            timer.m=0;
        }
        timer.ms++;
        settimer({ms:timer.ms,s:timer.s,m:timer.m,h:timer.h})
    }
  return (
    <div className='task d-flex'>
        <div className='pe-5'>
        {
       <h2>{timer.h>=10?timer.h:"0"+timer.h}:{timer.m>=10?timer.m:"0"+timer.m}:{timer.s>=10?timer.s:"0"+timer.s}:{timer.ms>=10?timer.ms:"0"+timer.ms}</h2>
      }
        </div>
     <div>
     {status==0&& <button className='btn' onClick={startime}>START</button>}
      {(status==1 && stop==0)&&<button className='btn' onClick={()=>endtime(timer)}>STOP</button>}
      {(stop==1) && <button className='btn m-2' onClick={()=>endtime1(timer)}>STOP</button>}
     </div>
      </div>
  )
}

export default StopWatch
