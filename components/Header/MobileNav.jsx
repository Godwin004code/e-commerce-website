import Link from 'next/link'
import React from 'react'

const MobileNav = () => {
  return (
   <nav>
    <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/'>About</Link>
        </li>
        <li>
            <Link href='/'>Shop</Link>
        </li>
    </ul>
   </nav>
  )
}

export default MobileNav