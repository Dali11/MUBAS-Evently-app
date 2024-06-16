"use client"

import { IEvent } from '@/lib/database/models/event.model'
import { SignedIn, SignedOut, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import CheckOut from './CheckOut'

const CheckOutButton = ({ event } : { event: IEvent }) => {
     const { user } = useUser();
     const userId = user?.publicMetadata.userId as string
     const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className='flex items-center gap-3'>
     {/* Cannot buy past events */}
     {hasEventFinished ? (
          <p className='p-2 text-red-400'>Sorry, tickets no longer available.</p>
     ) : (
          <>
              <SignedOut>
               <Button asChild size='lg' className='button rounded-full'>
                    <Link href='/sign-in'>
                    <CheckOut  event={ event } userId={ userId }/>
                    </Link>
               </Button>
              </SignedOut>
                    
              <SignedIn>
               <CheckOut  event={ event } userId={ userId }/>
              </SignedIn>
          </>
     )}
    </div>
  )
}

export default CheckOutButton