import React from "react";
import { BsCollection } from "react-icons/bs";

function Tagged() {
  return (
    <>
      <div className="pages-container-details w-[100%] h-auto flex flex-wrap gap-[1.5px] bg-zinc-900">
        <div className="hover:opacity-95 cursor-pointer image-holder w-72 h-72 relative bg-zinc-500">
          <BsCollection className="w-max text-zinc-950  absolute top-1 right-1" />
        </div>
        <div className="hover:opacity-95 cursor-pointer image-holder w-72 h-72 relative bg-zinc-500">
          <BsCollection className="w-max text-zinc-950  absolute top-1 right-1" />
        </div>
        <div className="hover:opacity-95 cursor-pointer image-holder w-72 h-72 relative bg-zinc-500">
          <BsCollection className="w-max text-zinc-950  absolute top-1 right-1" />
        </div>
      </div>
    </>
  );
}

export default Tagged;
