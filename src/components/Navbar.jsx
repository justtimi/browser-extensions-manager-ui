import React from 'react'
import { assets } from "../assets/assets.js"

const Navbar = () => {
  return (
    <div className='flex justify-between bg-neutral-50 rounded-2xl'>
        <img src={assets.navLogo} alt="extensions logo" className='ml-2' />

        <button className='bg-neutral-500 p-4 rounded-2xl m-2'><img src={assets.darkIcon} alt="dark mode icon" /></button>
    </div>
  )
}

export default Navbar