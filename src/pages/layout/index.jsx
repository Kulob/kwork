import React from 'react'
import Sidebar from '../../components/sidebar'
import { Outlet } from 'react-router-dom'
import TopBar from '../../components/topBar'

const LayoutPage = () => {
  return (
    <div className=' flex layout'>
        
        <div className=" sidebar">
        <Sidebar/>
        </div>
        <div className=" flex flex-col topbar">
        <TopBar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default LayoutPage