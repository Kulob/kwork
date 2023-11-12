import React from 'react'
import Sidebar from '../../components/sidebar'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
  return (
    <div className=' flex'>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default LayoutPage