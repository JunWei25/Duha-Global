import React from 'react'
import SideBar from '../components/SideBar'
import Home from './home/Home'
import Header from '../components/Header'

const Layout = () => {
  return (
    <>
    <body className="flex items-start justify-between">
        <SideBar/>
        <main className="w-full h-full pl-[320px]">
            <Header></Header>
            <Home></Home>
        </main>
    </body>
    </>
  )
}

export default Layout