"use client"

import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'


const MeetingSetup = ({setisSetupComplete}: {setisSetupComplete: (value: boolean) => void}) => {
  
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)

  const call = useCall()

  if(!call) throw new Error('usecall must be used within StreamCall component')

  useEffect(() => {
    if(isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable()
      call?.microphone.enable()
    }

  }, [isMicCamToggledOn, call?.camera, call?.microphone])

  return (
    <div className='flex h-[770px] w-full flex-col items-center justify-center gap-3 text-white bg-dark-1'>
      <h1 className='font-bold text-2xl'>Setup</h1>
      <VideoPreview />

      <div className="flex h-16 items-center justify-center gap-3">
        <label htmlFor="" className="flex items-center justify-center gap-2 font-medium">
          <input type="checkbox" 
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with Mic and Camera off
        </label>
        <DeviceSettings />
      </div>
      <Button 
        className='ronded-md bg-green-500 px-4 py-2.5'
        onClick={() => {
          call.join();
          
          setisSetupComplete(true)
        }}
      >
        Join Meeting
      </Button>
    </div>
  )
}

export default MeetingSetup