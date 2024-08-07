import React from 'react'

const Notificationcard = ()=> {
  return (
    <div className='NotificationCardContainer flex justify-evenly items-center h-max hover:cursor-pointer hover:bg-zinc-900'>
      <div className="NotificationPrfileImageHolder w-12 h-12 rounded-full relative">
        <img className='absolute w-[100%] h-[100%] object-cover object-top rounded-full' src="https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
      </div>
      <div className='NotificationUserDetails flex gap-1 items-center'>
        <p className='text-white text-sm font-medium'>_ritta045</p>
        <p className='text-white text-sm'>liked your post.</p>
        <p className='text-zinc-400 text-sm'>4d</p>
      </div>
      <div className="NotificationPrfileImageHolder w-12 h-12 rounded-full relative">
        <img className='absolute w-[100%] h-[100%] object-cover object-top rounded-lg' src="https://plus.unsplash.com/premium_photo-1679440414265-336dfccc72f1?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image" />
      </div>
    </div>
  )
}
const NotificationCreateCard = () =>{
    return(
        <div className='NotificationHandler flex flex-col justify-center gap-5 '>
        {
            [...Array(5)].map((_,index)=>(
                <Notificationcard key={index}/>
            ))
        }
        </div>
    )
}

export default NotificationCreateCard
