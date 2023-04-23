import React, { useState } from 'react'
import axios from "axios";
function Calendar() {
  let [tasks,settasks]=useState([])
  let [date,setdate]=useState("2023-04-23")
axios.get("http://localhost:3001/api/alltasks")
.then((res)=>{settasks(res.data)
setdate(tasks[0].taskdate)})
.catch((err)=>console.log("err in calendar.js is",err));

  return (
    <div><h5>{date}</h5>{
      tasks.map((obj)=><div>
        {(date!=obj.taskdate) && (<h2>{obj.taskdate}</h2> && setdate(obj.taskdate))}
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
