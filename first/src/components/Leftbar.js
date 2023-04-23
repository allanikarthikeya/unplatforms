import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import {MdOutlineCalendarMonth} from "react-icons/md";
import {MdOutlineDashboard} from "react-icons/md";
import {HiOutlineChartBar} from "react-icons/hi"
import './Leftbar.css'
function Leftbar() {
  return (
   <nav className='d-flex'> 
    <div className='lseparator vh-100'></div>
     <ul className="nav1 navbar-nav vh-100">
          <li className="nav-item pt-3">
          <Link href="#pricing" className='nav-link' to='/calendar'><span className='icons pe-3 ps-4' to='/calendar'><MdOutlineCalendarMonth size='30'/></span>Calendar</Link>
          </li>
          <li className="nav-item">
          <Link href="#pricing" className='nav-link' to='/dashboard'><span className='icons pe-3 ps-4' to='/dashboard'><MdOutlineDashboard size='30'/></span>Dashboard</Link>
          </li>
          <li className="nav-item">
          <Link href="#pricing" className='nav-link' to='/report' ><span className='icons pe-3 ps-4' to='/report'><HiOutlineChartBar size='30'/></span>Reports</Link>
          </li>
        </ul>
       
   </nav>
  )
}

export default Leftbar
