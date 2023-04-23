import React from 'react'
import Sidebar from './Sidebar'
import Leftbar from './Leftbar';
import StopWatch from './StopWatch';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
         <Sidebar/>
      <div className='row'>
       <div className='col-2'>
       <Leftbar/>
       </div>
       <div className='col-10'>
      <Outlet/>
       </div>
      </div>
     
    </div>
  )
}

export default RootLayout
