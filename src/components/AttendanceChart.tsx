"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
    
  },
  {
    name: 'Tue',
    present: 30,
    absent: 39,
    
  },
  {
    name: 'Wed',
    present: 50,
    absent: 8,
    
  },
  {
    name: 'Thu',
    present: 78,
    absent: 38,
    
  },
  {
    name: 'Fri',
    present: 89,
    absent: 48,
    
  },
];


const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='flex justify-between items-center'>
                    <h1 className='text-lg font-semibold'>Students</h1>
                    <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>
        <div className=' w-full h-[75%] '>
        <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px",borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px",paddingBottom:"40px"}}/>
          <Bar dataKey="present" fill="#FAE27C"  legendType='circle' radius={[10,10,0,0]}/>
          <Bar dataKey="absent" fill="#C3EBFA"  legendType='circle' radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AttendanceChart