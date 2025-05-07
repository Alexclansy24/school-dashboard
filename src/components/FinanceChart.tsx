"use client"
import Image from 'next/image';


import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expense: 2400,   
  },
  {
    name: 'Feb',
    income: 3000,
    expense: 4000, 
  },
  {
    name: 'March',
    income: 10000,
    expense: 2400,   
  },
  {
    name: 'Apr',
    income: 3000,
    expense: 1398, 
  },
  {
    name: 'May',
    income: 4000,
    expense: 2400,   
  },
  {
    name: 'Jun',
    income: 3000,
    expense: 5000, 
  },
  {
    name: 'July',
    income: 2000,
    expense: 4000,   
  },
  {
    name: 'Aug',
    income: 3000,
    expense: 1398, 
  },
  {
    name: 'Sep',
    income: 7000,
    expense: 2400,   
  },
  {
    name: 'Oct',
    income: 2500,
    expense: 3500, 
  },
  {
    name: 'Nov',
    income: 4000,
    expense: 2400,   
  },
  {
    name: 'Dec',
    income: 9000,
    expense: 1398, 
  },

  
];


const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt='' width={20} height={20}/>
        </div>
        
        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
          <XAxis dataKey="name"  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
          <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip />
          <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" activeDot={{ r: 8 }} strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
        
    </div>
  )
}

export default FinanceChart