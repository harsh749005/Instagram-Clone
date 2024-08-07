import React from 'react';
import { TbPhotoVideo } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";

const CreatePost = ({ visibility ,onClose,name}) => {
 
  return (
    <div style={{ display: visibility ? 'flex' : 'none' }} className='flex CreatePostMainContainer z-30 w-[100%] h-[100%] bg-[rgba(9,9,11,.5)] absolute top-0 text-white items-center justify-center'>
      <div className="CreatePostConatiner flex flex-col justify-start rounded-xl w-[32rem] h-[36rem] bg-zinc-800">
        <p className='text-white text-center pb-3 pt-2 font-medium mt-1'>Create new {name} Post</p>
        <hr className='opacity-15'/>
        <div className="FileUploaderContainer h-[100%] flex flex-col gap-6 items-center justify-center">
          <TbPhotoVideo className='text-8xl'/>
          <p className='font-medium text-xl'>Drag photos and videos here </p>
          <button style={{userSelect:"none"}} className='h-10 w-[200px] text-[15px] font-medium bg-blue-500 rounded-lg'>Select from computer</button>
        </div>
      </div>
      <IoMdClose onClick={onClose} className='text-white absolute text-[28px] right-4 top-4 hover:cursor-pointer'/>
    </div>
  );
}

export default CreatePost;
