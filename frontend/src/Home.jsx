import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./scroll.css";

import Feed from "./assets/Components/Post/FeedPost";
import Story from "./assets/Components/Story/Story";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import SuggestedForYou from "./assets/Components/Suggested/Suggested";
import MyBadge from "./assets/Components/MyBadge/MyBadge";
import CreatePost from "./assets/Components/Create/CreatePost";
function Home() {
  const storyHolderRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);

  const handleNext = () => {
    setTranslateX((prev) => prev - 310);
  };

  const handlePrevious = () => {
    setTranslateX((prev) => prev + 310);
  };

  return (
    <div className="bg-black flex">
      <Navbar  />
          
      <div className="HomeContentMain bg-pink-500 flex-grow h-[100vh] pl-60">
        <div className="HomeContent h-max flex bg-orange-400">
          <div className="HomeContentLeft w-[52rem] h-[100%] bg-zinc-950 flex justify-center p-5 ">
            <div className="HomeContentHolder w-[40rem] flex flex-col h-[100%] bg-slate-300 relative">
              <div className="w-[100%] h-[80px] bg-zinc-950 scroll">
              <GrFormPrevious
                    onClick={handlePrevious}
                    className=" absolute top-5 text-zinc-400 z-10 bg-white w-6 h-6 rounded-full hover:cursor-pointer"
                  />
                  <GrFormNext
                    onClick={handleNext}
                    className=" absolute right-0 top-5 text-zinc-400 z-10 bg-white w-6 h-6 rounded-full hover:cursor-pointer"
                  />
                <div
                  ref={storyHolderRef}
                  style={{ transform: `translateX(${translateX}px)`, transition:"1s"}}
                  className="MainStoryHolder relative w-[100%] h-[80px] bg-zinc-950 flex gap-4 "
                >
                 
                  <Story />
                </div>
              </div>
              <div className="MainPostHandler flex-grow bg-zinc-950 scroll pl-14 pr-14 pt-5">
                <Feed />
              </div>
            </div>
          </div>
          <div className="HomeContentRight flex-grow bg-zinc-950 ">
            <div className="RightContentMainContainer h-max pt-5">
             <MyBadge/>
             <div className="SuggestedHeading w-72 bg-zinc-950 flex justify-between pt-2 pb-4">
              <p className="font-medium text-zinc-400 text-[14px]">Suggested for you</p>
              <p className="text-blue-500 text-[13px]">See all</p>
             </div>
             <SuggestedForYou />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
