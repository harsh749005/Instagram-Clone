import React from "react";
import { BsCaretRight } from "react-icons/bs";
function Reels() {
  return (
    <>
      <div className="pages-container-details w-[100%] h-auto flex flex-wrap gap-[1.5px]  bg-zinc-900 hover:opacity-95 cursor-pointer">
        
        <div className="image-holder w-72 h-96 relative bg-zinc-500">
          {/* <img
            src="../src/assets/img.png"
            alt=""
            className="image absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          /> */}
          <div className=" h-max w-max absolute bottom-0 left-0 flex items-center">
            <BsCaretRight className="w-max text-zinc-950" />
            <p className=" text-md font-mono text-zinc-950">120</p>
          </div>
        </div>

        <div className="image-holder w-72 h-96 relative bg-zinc-500">
          <div className=" h-max w-max absolute bottom-0 left-0 flex items-center">
            <BsCaretRight className="w-max text-zinc-950" />
            <p className=" text-md font-mono text-zinc-950">320</p>
          </div>
        </div>

        <div className="image-holder w-72 h-96 relative bg-zinc-500">
          <div className=" h-max w-max absolute bottom-0 left-0 flex items-center">
            <BsCaretRight className="w-max text-zinc-950" />
            <p className=" text-md font-mono text-zinc-950">20k</p>
          </div>
        </div>


        <div className="image-holder w-72 h-96 relative bg-zinc-500">
          <div className=" h-max w-max absolute bottom-0 left-0 flex items-center">
            <BsCaretRight className="w-max text-zinc-950" />
            <p className=" text-md font-mono text-zinc-950">430</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Reels;
