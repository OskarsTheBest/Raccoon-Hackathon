import React from 'react'
import { FaTree, FaSignOutAlt, FaRegSun, FaRegQuestionCircle, FaUserTie, FaHouseUser, FaInfoCircle } from 'react-icons/fa';
import MyCalendar from './CalendarComponent';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-title'>
        <FaTree/>
        <span>Forest Guard</span>
      </div>

        <div className='sidebar-links'>
          <div className='sidebar-top-links'>
          <a href='/' className='sidebar-link mt'>
                <FaHouseUser className='side-icons' />
                <span>Home</span>
                </a>
          <a href='/' className='sidebar-link mt'>
                <FaInfoCircle className='side-icons' />
                <span>About</span>
                </a>
          <a href='/' className='sidebar-link mt'>
                <FaUserTie className='side-icons' />
                <span>Reach out to authorities</span>
                </a> 
          </div>
            <div className='sidebar-bottom-links'>
            <a href='/' className='sidebar-link'>
                <FaRegQuestionCircle className='side-icons' />
                <span>Help and support</span>
                </a>
            <a href='/' className='sidebar-link'>
                <FaRegSun className='side-icons' />
                <span>Settings</span>
                </a>    
                <a href='/' className='sidebar-link logout-link'>
                <FaSignOutAlt className='side-icons' />
                <span>Logout</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
