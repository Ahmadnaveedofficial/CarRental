import React, { useEffect, useState } from 'react';
import  { dummyDashboardData,assets } from '../../assets/assets.js';
import Title from '../../components/owner/Title.jsx';

const Dashboard = () => {
    const [data,setData]=useState({
        totalCars:0,
        totalBooking:0,
        pendingBooking:0,
        completedBooking:0,
        recentBooking:[],
        monthlyRevenue:0,
    });

    const dashboardCards=[
        {title:"Total Cars",value:data.totalCars,icon:assets.carIconColored},
        {title:"Total Booking",value:data.totalBooking,icon:assets.listIconColored},
        {title:"Pending",value:data.pendingBooking,icon:assets.cautionIconColored},
        {title:"Comfirmed",value:data.completedBooking,icon:assets.listIconColored},
    ]


    useEffect(()=>{
       setData(dummyDashboardData)
    },[])


  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
        <Title title='Admin Dashboard' subTitle='Monitor overall platform performance including total cars, bookings, revenue, and recent activities '/>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 max-w-3xl'>
             {dashboardCards.map((card,index)=>(
                  
                  <div key={index} className='flex gap-2 items-center justify-between p-4 rounded-md border border-borderColor'>
                         <div>
                               <h1 className='text-xs text-gray-500'>{card.title}</h1>
                               <p className='text-lg font-semibold'>{card.value}</p>
                         </div>

                         <div className='flex items-center justify-center w-10 h-10 rounded-full bg-primary/10'> 
                              <img src={card.icon} alt="" className='w-4 h-4 ' />
                         </div>
                  </div>
             ))}
        </div>
        
    </div>
  )
}

export default Dashboard