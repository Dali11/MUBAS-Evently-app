import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='border-t'>
      <div className='wrapper flex-center flex-between flex flex-col sm:flex-row gap-4 p-5 text-center'>
        <Link href='/'>
          <Image 
            src='/assets/images/logo.svg'
            alt='logo'
            width={128}
            height={38}
          />
        </Link>
        <p>2023 Eventy. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer