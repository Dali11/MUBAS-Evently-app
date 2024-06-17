import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='border-t'>
      <div className='wrapper flex-center flex-between flex flex-col sm:flex-row gap-4 p-5 text-center'>
        <div className="flex font-bold">
        <Link href='/'>
          <Image 
            src='/assets/images/MUBAS Logo.png'
            alt='logo'
            width={128}
            height={38}
          />
        </Link>
        <h4 className='pt-4 flex flex-col'>MUBAS <span className="text-primary-500">EVENTLY</span></h4>
        </div>
        <p>2024 MUBAS Eventy. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer