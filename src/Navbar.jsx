import React, { useState } from "react";
import { Link,useLocation, useParams } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

function Navbar({ handle,HandleNotification }) {
  const { naam } = useParams();
  const [Visivble,SetVisible] = useState(false);
  const VisibilityHandler = ()=>{
    SetVisible((prevVisible)=> !prevVisible )
  }

  
    const currenturl = useLocation();
  

  return (
    <div className="fixed relattive  h-screen w-60 bg-zinc-950 border-r-2 border-zinc-900">
      <div className="logo-holder h-24 px-4 bg-zinc-950 relative">
        <img
          src="../src/assets/instagram.png"
          alt="logo"
          className=" absolute  top-[50%]  translate-y-[-50%] h-16 w-32 object-contain"
        />
      </div>
      <div className="navlinks h-max ">
        <Link
          to="/"
          className="link-container  bg-zinc-950 flex flex-col items-center"
        >
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <img src="../src/assets/Home.svg" alt="home" className="w-[22px]" />
            <p className=" text-white ">Home</p>
          </div>
        </Link>

        <Link
          to="#"
          className="link-container  bg-zinc-950 flex flex-col items-center"
        >
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <img
              src="../src/assets/Search.svg"
              alt="reels"
              className="w-[22px]"
            />
            <p className="text-white">Search</p>
          </div>
        </Link>

        <Link
          to="#"
          className="link-container  bg-zinc-950 flex flex-col items-center"
        >
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <img
              src="../src/assets/Explore.svg"
              alt="reels"
              className="w-[22px]"
            />
            <p className="text-white">Explore</p>
          </div>
        </Link>

        <Link
          to="#"
          className="link-container  bg-zinc-950 flex flex-col items-center"
        >
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <img
              src="../src/assets/Reels.svg"
              alt="reels"
              className="w-[22px]"
            />
            <p className="text-white">Reels</p>
          </div>
        </Link>

        <Link
          to="#"
          className="link-container  bg-zinc-950 flex flex-col items-center"
        >
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <img
              src="../src/assets/Messages.svg"
              alt="reels"
              className="w-[22px]"
            />
            <p className="text-white">Messages</p>
          </div>
        </Link>

        <Link
          onClick={HandleNotification}
          
          to="#"
          className="link-container  bg-zinc-950 flex flex-col items-center"
        >
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <img
              src="../src/assets/Heart.svg"
              alt="reels"
              className="w-[22px]"
            />
            <p className="text-white">Notification</p>
          </div>
        </Link>

        <Link
        to={currenturl.pathname}
         onClick={handle=true}
          className="link-container  bg-zinc-950 flex flex-col items-center"
        >
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <img
              src="../src/assets/Create.svg"
              alt="reels"
              className="w-[22px]"
            />
            <p className="text-white">Create</p>
          </div>
        </Link>
        
        <Link
          to={naam ? `/${naam}` : "/harsh"}
          className="link-container text-white font-bold bg-zinc-950 flex flex-col items-center"
        >
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <div className="w-7 h-7 rounded-full border-2 border-slate-50 relative">
              <img
                src="../src/assets/Profile-pic.webp"
                alt="reels"
                className="w-[22px] absolute  rounded-full "
              />
            </div>
            <p>Profile</p>
          </div>
        </Link>

        <div style={{display:`${!Visivble?"none":"block"}`}} className="MoreOptions  p-2 bottom-[8rem] z-10 bg-zinc-600 text-white ml-2 rounded-xl flex flex-col w-[110%] h-[25.8rem] absolute">
          <Link
            to="#"
            className="link-container rounded-tl-xl rounded-tr-xl  bg-zinc-600 flex flex-col items-center"
          >
            <div className="link-holder flex space-x-4 h-[3.5rem] w-[100%] items-center px-3 hover:bg-zinc-500 hover:rounded-xl hover:cursor-pointer">
              <img
                src="../src/assets/Setting.svg"
                alt="reels"
                className="w-[22px]"
              />
              <p className="text-white">Settings</p>
            </div>
          </Link>

          <Link
            to="#"
            className="link-container rounded-xl  bg-zinc-600 flex flex-col items-center"
          >
            <div className="link-holder flex space-x-4 h-[3.5rem] w-[100%] items-center px-3 hover:bg-zinc-500 hover:rounded-xl hover:cursor-pointer">
              <img
                src="../src/assets/Activity.svg"
                alt="reels"
                className="w-[22px]"
              />
              <p className="text-white">Your Activity</p>
            </div>
          </Link>
          <Link
            to="#"
            className="link-container rounded-xl  bg-zinc-600 flex flex-col items-center"
          >
            <div className="link-holder flex space-x-4 h-[3.5rem] w-[100%] items-center px-3 hover:bg-zinc-500 hover:rounded-xl hover:cursor-pointer">
              <img
                src="../src/assets/Saved.svg"
                alt="reels"
                className="w-[18px]"
              />
              <p className="text-white">Saved</p>
            </div>
          </Link>
          <Link
            to="#"
            className="link-container rounded-xl  bg-zinc-600 flex flex-col items-center"
          >
            <div className="link-holder flex space-x-4 h-[3.5rem] w-[100%] items-center px-3 hover:bg-zinc-500 hover:rounded-xl hover:cursor-pointer">
              <img
                src="../src/assets/Appearance.svg"
                alt="reels"
                className="w-[20px]"
              />
              <p className="text-white">Switch Appearance</p>
            </div>
          </Link>
          <Link
            to="#"
            className="link-container rounded-xl bg-zinc-600 flex flex-col items-center"
          >
            <div className="link-holder flex space-x-4 h-[3.5rem] w-[100%] items-center px-3 hover:bg-zinc-500 hover:rounded-xl hover:cursor-pointer">
              <img
                src="../src/assets/Report.svg"
                alt="reels"
                className="w-[20px]"
              />
              <p className="text-white">Report a problem</p>
            </div>
          </Link>
          <Link
            to="#"
            className="link-container rounded-xl bg-zinc-600 flex flex-col items-center"
          >
            <div className="link-holder flex space-x-4 h-[3.5rem] w-[100%] items-center px-3 hover:bg-zinc-500 hover:rounded-xl hover:cursor-pointer">
              <p className="text-white">Switch accounts</p>
            </div>
          </Link>
          <hr />
          <Link
            to="#"
            className="link-container rounded-xl rounded-br-xl  bg-zinc-600 flex flex-col items-center"
          >
            <div className="link-holder flex space-x-4 h-[3.5rem] w-[100%] items-center px-3 hover:bg-zinc-500 hover:rounded-xl hovercursor-pointer">
              <p className="text-white">Log out</p>
            </div>
          </Link>
        </div>

      </div>
      <div className="others-links h-max relative top-[45px]">
        <Link
          target="_blank"
          to="https://www.threads.net/?xmt=AQGz1iuDJJo8nyK5T04URtefn-8TiGPwAuQv8ShiAlioT3U"
          className="link-container group bg-zinc-950 flex flex-col items-center"
        >
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <img
              src="../src/assets/Thread.webp"
              alt="reels"
              className="w-[22px] "
            />
            <p className=" text-white ">Threads</p>
            <FiExternalLink
              className="ThreadLink text-zinc-500 text-[22px] group-hover:visible invisible"
              style={{ marginLeft: "70px" }}
            />
          </div>
        </Link>

        <Link to={naam ? `/${naam}/` : "/harsh/#"} onClick={VisibilityHandler} className="link-container  bg-zinc-950 flex flex-col items-center">
          <div className="link-holder flex space-x-4 h-14 w-52 items-center px-3 hover:bg-[#131313] rounded-md cursor-pointer">
            <img
              src="../src/assets/Menu.svg"
              alt="reels"
              className="w-[22px] "
            />
            <p  className=" text-white ">
              More
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
