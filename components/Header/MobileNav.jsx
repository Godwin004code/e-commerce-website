import Link from 'next/link'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import {TiTimes} from "react-icons/ti"


const MobileNav = ({setShowNav}) => {
    const removeNav = () => {
        setShowNav(false)
        document.body.classList.remove('remove-scrollbar')
    }
  return (
   <nav className='position-absolute end-0 top-0 bottom-0 start-0 vh-100 vw-100' style={{zIndex: 10000, backgroundColor: '#424242'}}>
    <ul>
    <li className='list-unstyled text-decoration-none text-white position-absolute' style={{right: '5%', top: '5%', fontSize: '40px'}} onClick={removeNav}>
            <FaTimes />
        </li>
        <li className='list-unstyled text-decoration-none mt-5 fs-1'>
            <Link href='/'>Home</Link>
        </li>
        <li className='list-unstyled text-decoration-none mt-5 fs-1'>
            <Link href='/'>About</Link>
        </li>
        <li className='list-unstyled text-decoration-none mt-5 fs-1'>
            <Link href='/'>Shop</Link>
        </li>
        <li className='list-unstyled text-decoration-none mt-5 fs-1'>
            <Link href='/'>Login</Link>
        </li>
        
    </ul>
   </nav>
  )
}

export default MobileNav