import React from 'react'

import NavbarOwner from '../../components/owner/NavbarOwner.jsx'
import Sidebar from '../../components/owner/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col'>
           <NavbarOwner/>
           <div className='flex'>
             <Sidebar/>
             <Outlet/>
           </div>
    </div>
  )
}

export default Layout