import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'


const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href='/zoom-meeting' className='flex items-center gap-1 mt-6'>
        <Image 
          src='/assets/images/MUBAS Logo.png'
          alt='logo'
          width={74}
          height={74}
          className='max-sm:size-30 h-14 w-24'
        />

        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>MUBAS ZOOM</p>
      </Link>

      <div className="flex-between gap-5 ">
        {/* cleck user management */}

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar