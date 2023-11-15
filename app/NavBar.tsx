'use client';
import Link from 'next/link'
import React from 'react'
import { FaBoxTissue } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import classnames from 'classnames';

const NavBar = () => {
    const currentPath = usePathname()

    const links =[
        {label : 'Dashbord' , href :'/'},
        {label : 'Issues' , href :'/issues'},
    ]
  return (
    <nav className='flex space-x-6 mb-5 px-5 h-14 items-center border-b'>
        <Link href='/' className='text-zinc-900'><FaBoxTissue /></Link>
        <ul className='flex space-x-6'>
            {links.map(link => <Link className={classnames({
                'text-zinc-500' : link.href !== currentPath,
                'text-zinc-900' : link.href === currentPath,
                'hover:text-zinc-800 transition-colors' : true,

            })} href={link.href} key={link.href}>{link.label}</Link>)}
        </ul>

    </nav>
  )
}

export default NavBar