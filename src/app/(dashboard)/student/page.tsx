import EventCalendar from '@/components/EventCalendar'
import Announcements from '@/components/Announcements'
import BigCalender from '@/components/BigCalender'
const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* LEFT  */}
      <div className="w-full xl:w-2/3">
        <div className='h-[800px] xl:h-full bg-white p-4 rounded-md gap-4'>
          <h1 className='text-xl font-semibold'>Schedule(4A)</h1>
          <BigCalender/>
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
      <EventCalendar/>
      <Announcements/>
      </div>
    </div>
  )
}

export default StudentPage