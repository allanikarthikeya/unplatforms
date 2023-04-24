import React, { useEffect, useState } from 'react'
import axios from "axios";
function Calendar() {
  let [tasks,settasks]=useState([])
  let [date,setdate]=useState("")

  useEffect(()=>{
    axios.get("http://localhost:3001/api/alltasks")
  .then((res)=>{console.log(res.data[0].taskdate); settasks(res.data)
  })
  .catch((err)=>console.log("err in calendar.js is",err));

  },[])
  return (
    <div>{
      tasks.map((obj)=><div>
        {(date!==obj.taskdate) && <h5>{date=obj.taskdate}</h5>}
      <div className='taskllists d-flex justify-content-between border border-dark'>
      <div className='pt-3 pb-1 ps-3 text-muted d-flex'>
            <h6 className='me-4'>{obj.task}</h6>
            
      </div> 
      <div className='p-2'>
      <h4>{obj.h>=10?obj.h:"0"+obj.h}&nbsp;:&nbsp;{obj.m>=10?obj.m:"0"+obj.m}&nbsp;:&nbsp;{obj.s>=10?obj.s:"0"+obj.s}&nbsp;:&nbsp;{obj.ms>=10?obj.ms:"0"+obj.ms}</h4>
        </div>
        </div>
        </div>
      )
    }
    </div>
  )
}

export default Calendar
