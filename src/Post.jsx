import React from "react";
import Footer from "./Footer";
import InstaPostData from "./InstaPostData";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";

function Post() {
  return (
    <>
      <div className="pages-container-details gap-1 w-full h-auto flex flex-wrap  bg-zinc-900">
        {InstaPostData.map((postData) => {
          const { id, image } = postData;
          console.log(postData.image);
          return (
            <div className="image-holder group w-[17.9rem] h-[17.9rem] relative" key={id}>
              <img
                src={image}
                alt=""
                className=" hover:opacity-50 cursor-pointer image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%]"
              />
              <div className="InstaPostIcons group-hover:visible invisible absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center gap-5">
              <div className="InstaPostLikes flex items-center justify-center w-max h-max gap-1">
              <FaHeart className="text-[18px]"/>
              <p className="font-bold text-[18px]">5</p>
              </div>
              <div className="InstaPostComments flex items-center justify-center w-max h-max gap-1">
              <FaComment className="scale-x-[-1] text-[18px]" />
              <p className="font-bold text-[18px]">10</p>
              </div>
              </div>
            </div>
        
          );
        })}
      </div>
    </>
        
  );
}

export default Post;
