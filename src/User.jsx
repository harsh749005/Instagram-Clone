import React, { useState } from "react";
import { createBrowserRouter, useParams } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import Post from "./Post";
import Footer from "./Footer";
import Navbar from "./Navbar";
import './classcss.css'
import CreatePost from "./assets/Components/Create/CreatePost";
function User() {
  var clutter = "";
  const footerlinks = [
    "Meta",
    "About",
    "jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Location",
    "Instagram Lite",
    "Threads",
    "Contact",
    "Uploding & Non-Users",
    "Meta Verified",
  ];
  const [activeLink, setActiveLink] = useState("post");
  const [postvalue,postsetvalue] = useState(false);
  const [reelvalue,reelsetvalue] = useState(false);

  const {naam} = useParams();
  console.log(naam);
  return (
    <>
      <div className=" h-screen bg-zinc-950 flex">
        {/* <p className='text-white underline decoration-sky-500'>
            Hello I am user{name.naam}
      </p> */}
        <Navbar />
      
        
        <div className="pl-56  text-white h-max  flex-grow bg-zinc-950 flex flex-col items-center">
          <div className="content-holder bg-pink-600 w-[67%] ">
            <div className="profile-container w-[100%] h-[360px] bg-zinc-950">
              {/* red*/}
              <div className="profile-details-container h-max bg-zinc-950 flex space-x-28 py-4">
                <div className="profile-image-holder relative w-44 h-44 rounded-full border-2 border-zinc-800">
                  <img
                    src="../src/assets/Profile-pic.webp"
                    alt="Profile"
                    className=" w-40 h-40 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>

                <div className="profile-details ">
                  <div className="Profile-name h-20 bg-slate-950 flex space-x-5 items-center p-5">
                    <h4 className=" text-xl">harshpatel2461</h4>
                    <div className="button-container  space-x-3">
                      <button className=" w-28 p-1 rounded-lg font-medium bg-zinc-700">
                        Edit profile
                      </button>
                      <button className=" w-28 p-1 rounded-lg font-medium bg-zinc-700">
                        View archive
                      </button>
                    </div>
                    <img
                      src="../src/assets/Setting.svg"
                      alt="Setting"
                      className="w-8 h-8 text-white rounded-full"
                    />
                  </div>

                  <div className="profile-status bg-zinc-950 h-8 py-5 flex items-center  px-5 space-x-10">
                    <h4>3posts</h4>
                    <h4>198 followers</h4>
                    <h4> 776 following</h4>
                  </div>

                  <div className="title bg-zinc-950 h-10 py-2 px-5 space-x-10">
                    Radhe Krishna
                  </div>
                </div>
              </div>
              <div  className=" highlights-container  bg-zinc-950 h-max flex w-[100%]  gap-[60px] ">
                <div className="highlights-details w-max h-max bg-slate-950 snap-center">
                  <div className="highlights-1 relative w-[88px] h-[88px] border-2  border-zinc-800 rounded-full">
                    <img
                      src="../src/assets/high1.png"
                      alt=""
                      className="status absolute rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20"
                    />
                  </div>
                  <h3 className="highlights-name text-[12px] text-center font-medium my-2">
                    abcd
                  </h3>
                </div>

                <div className="highlights-details w-max h-max bg-slate-950 snap-center">
                  <div className="highlights-1 relative w-[88px] h-[88px] border-2  border-zinc-800 rounded-full">
                  <img
                      src="../src/assets/high1.png"
                      alt=""
                      className="status absolute rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20"
                    />
                  </div>
                  <h3 className="highlights-name text-[12px] text-center font-medium my-2">
                    abcd
                  </h3>                </div>

                <div className="highlights-details w-max h-max bg-slate-950 snap-center">
                  <div className="highlights-1 relative w-[88px] h-[88px] border-2  border-zinc-800 rounded-full">
                  <img
                      src="../src/assets/high1.png"
                      alt=""
                      className="status absolute rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20"
                    />
                  </div>
                  <h3 className="highlights-name text-[12px] text-center font-medium my-2">
                    klmno
                  </h3>
                </div>

                <div className="highlights-details w-max h-max bg-slate-950 snap-center">
                  <div className="highlights-1 relative w-[88px] h-[88px] border-2  border-zinc-800 rounded-full">
                  <img
                      src="../src/assets/high1.png"
                      alt=""
                      className="status absolute rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20"
                    />
                  </div>
                  <h3 className="highlights-name text-[12px] text-center font-medium my-2">
                    pqrs
                  </h3>
                </div>

                <div className="highlights-details w-max h-max bg-slate-950 snap-center">
                  <div className="highlights-1 relative w-[88px] h-[88px] border-2  border-zinc-800 rounded-full">
                  <img
                      src="../src/assets/high1.png"
                      alt=""
                      className="status absolute rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20"
                    />
                  </div>
                  <h3 className="highlights-name text-[12px] text-center font-medium my-2">
                    tuvw
                  </h3>
                </div>

       
              </div>
            </div>
            <div className="profile-details w-[100%] h-auto bg-slate-50">
              <div className="line w-full h-[1px] bg-zinc-600"></div>
              <div className="pages bg-zinc-950 h-10 flex justify-center space-x-24 items-center">
                <Link
                  onClick={()=>{setActiveLink("post")}}
                  className={` page-link text-[14px] text-zinc-${activeLink === "post" ? 50:400} hover:cursor-pointer hover:text-zinc-50 `}
                  to={`/${naam}`}
                >
                  POST
                </Link>
                <Link
                  onClick={()=>{setActiveLink("reel")}}
                  className={` page-link text-[14px] text-zinc-${activeLink === "reel" ? 50:400} hover:cursor-pointer hover:text-zinc-50 `}
                  to={`/${naam}/reels`}
                >
                  REELS
                </Link>
                <Link
                  onClick={()=>{setActiveLink("saved")}}
                  className={` page-link text-[14px] text-zinc-${activeLink === "saved" ? 50:400} hover:cursor-pointer hover:text-zinc-50 `}
                  to={`/${naam}/save`}
                >
                  SAVED
                </Link>
                <Link
                  onClick={()=>{setActiveLink("tagged")}}
                  className={` page-link text-[14px] text-zinc-${activeLink === "tagged" ? 50:400} hover:cursor-pointer hover:text-zinc-50 `}
                  to={`/${naam}/tagged`}
                >
                  TAGGED
                </Link>
              </div>

              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
