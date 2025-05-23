import React from "react";

const Suggested = () => {
  return (
    <div className="MainSuggestedContainer flex justify-between w-72 bg-zinc-950">
      <div className="SuggestedProfile flex gap-3">
        <div className="SuggestedProfileHolder relative w-12 h-12 rounded-full hover:cursor-pointer">
          <img
            className="w-[100%] h-[100%] absolute object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="SuggesetedProfileHolder"
          />
        </div>
        <div className="SuggestedProfileDetails">
          <p className="text-white font-normal hover:cursor-pointer">
            kernal2641
          </p>
          <p className="text-zinc-400 text-[13px] font-normal hover:cursor-pointer">
            Suggested for you
          </p>
        </div>
      </div>
      <button className="text-blue-500 text-[13px] font-normal">Follow</button>
    </div>
  );
};
const SuggestedForYou = () => {
    return(
        <div className="SuggestedUserHolder w-[max] h-[max] flex flex-col gap-2">
        {[...Array(5)].map((_,index) => (
            
            <Suggested key={index}/>
        ))}
        </div>
    );
};

export default SuggestedForYou;
