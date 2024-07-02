
import Navbar from '@/components/zoom/Navbar'
import Sidebar from '@/components/zoom/Sidebar'
import React, { ReactNode } from 'react'


const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className='relative'>
     <Navbar />

     <div className="flex">
     <Sidebar />

          <section className='min-h-screen flex flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14 py-8'>
               <div className="w-full py-8">
                    { children }
               </div>
          </section>
     </div>
    </main>
  )
}

export default HomeLayout