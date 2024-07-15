import React from 'react'
import routers from '@router'
import { NavLink} from 'react-router-dom'
import Container from '../container/container'
import Twiter from '../icons/twiter'
import nav from "../img/nav.svg"
export const Header = () => {
  return (
    <>
    <div className='mt-3 absolute'>
    <img src={nav} alt="" />
</div>
    <div className='flex gap-5 container text-white relative'>


{
routers?.map((link)=>{
    return (
        <div key={link.path}>
          <NavLink className="" to={link.path}>{link.content}</NavLink>
        </div>
      )
    })
}
</div>
    </>
  )
}
