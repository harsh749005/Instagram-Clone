import React from 'react'

const MyBadge = ()=> {
  return (
    <div className="MainOwnerContainer flex justify-between w-72 bg-zinc-950">
      <div className="OwnerProfile flex gap-3">
        <div className="OwnerProfileHolder relative w-12 h-12 rounded-full hover:cursor-pointer">
          <img
            className="w-[100%] h-[100%] absolute object-cover rounded-full"
            src="https://images.unsplash.com/photo-1516980907201-943c13a8d03c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="ProfileImageHolder"
          />
        </div>
        <div className="OwnerProfileDetails">
          <p className="text-white font-normal hover:cursor-pointer">
            harshpatel2641
          </p>
          <p className="text-zinc-400 text-[13px] font-normal hover:cursor-pointer">
          ✨HarshPatel✨
          </p>
        </div>
      </div>
      <button className="text-blue-500 text-[13px] font-normal">Switch</button>
    </div>
  )
}

export default MyBadge
