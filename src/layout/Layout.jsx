import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import MyFooter from './MyFooter'

function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <MyFooter />
    </div>
  )
}

export default Layout