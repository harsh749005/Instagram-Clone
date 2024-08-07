import React from 'react'
import '../../../scroll.css'
import NotificationCreateCard from '../../Notificationcard/Notificationcard'
const Notification=({Notification})=> {
  return (
    <div className={`NotificationContainer w-[23rem] h-[100%] scroll bg-zinc-950 fixed top-0 left-${Notification?"[80px]":"[0px]"} ${Notification?"block":"hidden"} z-10`}>
      <p className='text-white font-bold text-2xl pb-5 pt-6 pl-6'>Notifications</p>
      <hr />
      <p className='text-white font-bold pl-6 pb-5 pt-5'>This week</p>
      <NotificationCreateCard/>
      <hr className='mt-5'/>
      <p className='text-white font-bold pl-6 pb-5 pt-5'>This month</p>
      <NotificationCreateCard/>
    </div>
  )
}

export default Notification
