import React from 'react'
import { FaTree, FaSignOutAlt, FaRegSun, FaRegQuestionCircle } from 'react-icons/fa';
import CalendarComponent from './CalendarComponent';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <FaTree/>
        <span>Forest Guard</span>

        <div className='sidebar-links'>
          <div className='sidebar-top-links'>
            <CalendarComponent />
          </div>
            <div className='sidebar-bottom-links'>
            <a href='/' className='sidebar-link'>
                <FaRegQuestionCircle />
                <span>Help and support</span>
                </a>
            <a href='/' className='sidebar-link'>
                <FaRegSun />
                <span>Settings</span>
                </a>    
                <a href='/' className='sidebar-link logout-link'>
                <FaSignOutAlt />
                <span>Logout</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar