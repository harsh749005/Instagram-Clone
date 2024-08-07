import React, { useState } from "react";
import { FaEllipsis } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { MdOutlineSaveAlt } from "react-icons/md";
import { HiOutlineFaceSmile } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
const FeedPost = () => {
  const [Likes,SetLikes] = useState(26354);
  const [Toggle,SetToggle] = useState(false);
  const ToggleHandler = ()=>{
    SetToggle((prevToggle) => !prevToggle);
    LikeCountHandler();
  };

  const LikeCountHandler = () => {
    SetLikes((prevLikes) => (Toggle ? prevLikes - 1 : prevLikes + 1));
  };
  return (
    <>
      <div className="PostContainer h-max  relative bg-zinc-950 mb-16 flex flex-col">
        <div className="PostOwnerDetailsMainContainer bg-zinc-950 flex justify-between items-center h-12">
          <div className="PostOwnerDetailsContainer flex items-center gap-5 w-max h-[100%] bg-zinc-950 ">
            <div className="PostOwnerProfilePicHolder relative  bg-gradient-to-tr from-yellow-500 from-40% to-pink-600 hover:cursor-pointer w-12 h-12  rounded-full">
              <img
                className="h-[90%] w-[90%] object-cover left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] absolute rounded-full "
                src="https://images.unsplash.com/photo-1721908919546-f752b776f970?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <p className="text-sm text-white font-bold hover:cursor-pointer">
              aismindia •{" "}
              <span className="font-medium text-zinc-400 hover:cursor-pointer">
                21h
              </span>
            </p>
          </div>
          <FaEllipsis className="text-white hover:cursor-pointer" />
        </div>
        <div className="PostOwnerPost mt-2 relative h-[35rem]">
          <img
            className="h-[100%] w-[100%] object-cover left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] absolute hover:cursor-pointer"
            src="https://images.unsplash.com/photo-1721908919546-f752b776f970?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="PostInteractionContainer">
          <div className="PostInteraction flex justify-between items-center">
            <div className="Interactions flex items-center gap-4 pt-3 pl-2">
            <FaHeart onClick={ToggleHandler} style={{display:`${!Toggle?'none':'block'}`}} className="text-pink-600   text-[22px] hover:cursor-pointer "/>
              <FaRegHeart onClick={ToggleHandler} style={{display:`${Toggle?'none':'block'}`}} className="text-white scale-x-[-1] text-[22px] hover:cursor-pointer hover:text-zinc-400" />
              <FaRegComment className="text-white scale-x-[-1] text-[22px] hover:cursor-pointer hover:text-zinc-400" />
              <FiSend className="text-white text-[22px] hover:cursor-pointer hover:text-zinc-400" />
            </div>
            <div className="SavePost pr-2">
              <MdOutlineSaveAlt className="text-white text-[22px] hover:cursor-pointer hover:text-zinc-400" />
            </div>
          </div>
          <div className="PostInterationDetails relative pt-4 pl-2">
            <p className="text-white font-bold text-[14px] hover:cursor-pointer">
              {Likes.toLocaleString()} likes
            </p>
            <p className="text-white text-[15px] hover:cursor-pointer">abcd</p>
            <p className="text-white text-[14px] opacity-80 hover:cursor-pointer">
              View all 364 comments
            </p>
            <p className="text-white text-[14px] opacity-80 hover:cursor-pointer">
              Add a comment...
            </p>
            <HiOutlineFaceSmile className="text-white absolute bottom-1 right-0 hover:cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

const Feed = () => {
  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <FeedPost key={index} />
      ))}
    </div>
  );
};

export default Feed;
