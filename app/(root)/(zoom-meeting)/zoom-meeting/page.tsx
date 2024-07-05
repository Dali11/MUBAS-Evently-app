import MeetingTypeList from "@/components/zoom/MeetingTypeList"


const ZoomMeetingHomePage = () => {
  const now  = new Date()
  const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit', minute: '2-digit'
  })
  const date = (new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'})).format(now)
  return (
    <section className='flex size-full flex-col gap-8'>
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover bg-no-repeat md:bg-contain">
        <div className="flex flex-col h-full justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h1 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-bold ml-32 mt-8 text-blue-600'>Upcoming meeting at 12:30 PM</h1>
          <div className="flex flex-col gap-2 ">
            <h1 className='text-4xl font-extrabold lg:text-7xl ml-0'>{time}</h1>
            <p className='text-lg font-medium text-sky-1 lg:text-2xl'>{date}</p>
          </div>
        </div>
      </div>

       <MeetingTypeList /> 
    </section>
  )
}

export default ZoomMeetingHomePage;