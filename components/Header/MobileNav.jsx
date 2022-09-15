import Link from 'next/link'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {TiTimes} from "react-icons/ti"


const MobileNav = ({setShowNav}) => {
    const removeNav = () => {
        setShowNav(false)
    }
  return (
   <nav className='position-absolute bg-success end-0 start-0 vh-100' style={{zIndex: 10000}}>
    <ul>
        <li className='list-unstyled text-decoration-none'>
            <Link href='/'>Home</Link>
        </li>
        <li className='list-unstyled text-decoration-none'>
            <Link href='/'>About</Link>
        </li>
        <li className='list-unstyled text-decoration-none'>
            <Link href='/'>Shop</Link>
        </li>
        <li className='list-unstyled text-decoration-none' onClick={removeNav}>
            <TiTimes />
        </li>
    </ul>
   </nav>
  )
}

export default MobileNav