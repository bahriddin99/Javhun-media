import React from 'react'
import { Header } from '@com-header'
import Footer from '@com-footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="flex flex-col">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
    </>
  )
}

export default Layout