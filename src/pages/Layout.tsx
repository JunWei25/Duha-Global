import React from 'react'
import SideBar from '../components/SideBar'
import Home from './home/Home'

const Layout = () => {
  return (
    <>
    <body className="flex items-start justify-between">
        <SideBar/>
        <main className="w-full h-full">
            <Home></Home>
        </main>
    </body>
    </>
  )
}

export default Layout