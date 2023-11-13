import React from 'react'
import Sidebar from '../../components/sidebar'
import { Outlet } from 'react-router-dom'
import TopBar from '../../components/topBar'

const LayoutPage = () => {
  return (
    <div className=' flex'>
        
        <Sidebar/>
        <div className=" flex flex-col">
        <TopBar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default LayoutPage