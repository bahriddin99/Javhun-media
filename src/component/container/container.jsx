import React from 'react'
import { Outlet } from 'react-router-dom'
import "./index.scss"
const Container = () => {
  return (
    <div className='container'>
        <Outlet/> 
    </div>
  )
}

export default Container