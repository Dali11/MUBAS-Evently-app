"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import HomeCard from "./HomeCard"
import MeetingModal from "./MeetingModal"
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "../ui/textarea"
import ReactDatePicker from "react-datepicker"


const MeetingTypeList = () => {
  const router = useRouter()
  const [meetingState, setMeetingState] = useState<
    'isScheduleMeeting' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined >()

     const { toast } = useToast()

    const { user } = useUser();
    const client = useStreamVideoClient()
    const [values, setValues] = useState({
      dateTime: new Date(),
      description: '',
      link: ''
    })

     const [callDetails, setCallDetails] = useState<Call>()

    const createMeeting = async () => {
      
      if(!client || !user) return;

      try {

        if(!values.dateTime) {
          toast({
            title: "Please Select date and time",
          })
          return;
        }
        const id = crypto.randomUUID()
        const call = client.call('default', id)

        if(!call) throw new Error('Failed to create call')

        const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString()
        const description = values.description || 'Instantmeeting'

        await call.getOrCreate({
          data: {
            starts_at: startsAt,
            custom: {
              description
            }
          }
        })

        setCallDetails(call)

        if(!values.description) {
          router.push(`/meeting/${call.id}`)
        }

        toast({
          title: "Meeting Created",
        })

      } catch (error) {
        console.log(error)
        toast({
          title: "Failed to creat meeting",
        })
      }
    } 

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-col-4">
     <HomeCard 
      img='/assets/icons/add-meeting.svg'
      title= "New Meeting"
      description= "Start an instant meeting"
      handleClick={() => setMeetingState("isInstantMeeting")}
      className="bg-orange-1"
     />
     <HomeCard 
      img='/assets/icons/schedule.svg'
      title= "Schecule Meeting"
      description= "Plan your meeting"
      handleClick={() => setMeetingState("isScheduleMeeting")}
      className="bg-blue-1"
     />
     <HomeCard 
      img='/assets/icons/recordings.svg'
      title= "Recordings"
      description= "Check out your recordings"
      handleClick={() => router.push('/recordings')}
      className="bg-purple-1"
     />
     
     <HomeCard 
      img='/assets/icons/join-meeting.svg'
      title= "Join Meeting"
      description= "Via invitation link"
      handleClick={() => setMeetingState("isJoiningMeeting")}
      className="bg-yellow-1"
     />

      {!callDetails ? (
        <MeetingModal 
        isOpen={meetingState === 'isScheduleMeeting'}
        onClose={() => setMeetingState(undefined)}
        title= 'Create Meeting'
        handleClick={ createMeeting }
      > 
        <div className="flex flex-col gap-2.5">
          <label className="text-base text-normal leading-[22px] text-sky-2">Add a description</label>
          <Textarea className="border-none bg-dark-2 focus-visible:ring-0 focus-visible:ring-offset-0"
            onChange={(e) => setValues({...values, description: e.target.value})}
          />
        </div>
        <div className="flex w-full flex-col gap-2.5">
        <label className="text-base text-normal leading-[22px] text-sky-2">Select Date and Time</label>
        <ReactDatePicker 
          selected ={values.dateTime}
          onChange={(date: Date) => setValues({...values, dateTime: date! })}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          
          className="w-full rounded bg-dark-1 p-2 focus:outline-none"
        />
        </div>
      </MeetingModal>
      ): (
        <MeetingModal 
        isOpen={meetingState === 'isScheduleMeeting'}
        onClose={() => setMeetingState(undefined)}
        title= 'Meeting Created'
        className= "text-center"
        handleClick={() => { navigator.clipboard.writeText(meetingLink)
          toast({title: 'Link copied'})
        }}
        image="/assets/icons/checked.svg"
        buttonIcon="/assets/icons/copy.svg"
        buttonText="Copy meeting link"
      /> 
      )}
     <MeetingModal 
      isOpen={meetingState === 'isInstantMeeting'}
      onClose={() => setMeetingState(undefined)}
      title= 'Start an instant Meeting'
      className= "text-center"
      buttonText= "Start Meeting"
      handleClick={ createMeeting }
    /> 
    </section>
  )
}

export default MeetingTypeList;