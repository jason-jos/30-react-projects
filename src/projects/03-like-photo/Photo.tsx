import { Title } from "../../components/Title"

import { CiFaceSmile,CiHeart } from "react-icons/ci"
import { RiUserSharedLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import { useState } from "react";

const Photo = () => {
  
  const [like,setLike]=useState(false)
  const [count,setCount]=useState(0)

  const handleLike=()=>{
   if(!like){
    setLike(true)
    setCount(count+1)
  }
  else{
    setLike(false)
    setCount(count-1)
  }
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-center space-x-5 mb-5 mt-10">
         <Title
        classes={"text-center text-3xl    font-bold text-gray-400"}
        title={"Rate the photo"}/>
      <Title classes={"text-center text-xl font-bold "} title={`Likes ${count}`}/>
      </div>
      <div className="flex justify-center items-center h-[500px] w-[400px] mt-10 mx-auto ">
        <div className="bg-gray-600/25 rounded-md  px-4 py-6 border-2 border-black shadow-2xl">
          <div className="flex justify-center space-x-2 mb-4">
            <CiFaceSmile className="mt-1" size={30} color={"yellow-600"}/>
            <h3 className="text-center font-bold text-2xl">Doggy dog</h3>
          </div>
          <img
            src="./src/assets/dog.jpg"
            alt=""
            className=" max-w-full max-h-full object-cover overflow-hidden pl-4 pr-4"
          />
          <div className="flex justify-between px-4 mt-4">
            <RiUserSharedLine  className="cursor-pointer" size={40} />
            { 
              like ?
              <FaHeart  size={40}  fill={'red'} className="cursor-pointer" onClick={handleLike}/> : 
              < CiHeart size={40} className="cursor-pointer" onClick={handleLike}/>
            }
        </div>
        </div>
      </div>
    </div>
  );
}

export default Photo