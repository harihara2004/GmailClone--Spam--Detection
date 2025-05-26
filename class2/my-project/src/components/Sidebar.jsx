import React, { useState } from 'react'
import { IoMdStar } from 'react-icons/io';
import { LuPencil } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { MdOutlineDrafts } from "react-icons/md";
import { MdInbox } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setOpen } from "../redux/AppSlice";
const SidebarItems = [
  {
    icon: < MdInbox size={'24px'} />,
    text: "Inbox"
  },
  {
    icon: <IoMdStar size={'24px'} />,
    text: "Starred"
  },
  {
    icon: <MdOutlineWatchLater size={'24px'} />,
    text: "Snoozed"
  },
  {
    icon: <TbSend2  size={'24px'} />,
    text: "Sent"
  },
  {
    icon: <MdOutlineDrafts size={'24px'} />,
    text: "Drafts"
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={'24px'} />,
    text: "More"
  },



]
const Sidebar = () => {
  // const[open,setOpen]=useState(false);//this is local state variable
  const dispatch =useDispatch();
  return (
    <div className='w-[15%]'>
      <div className='p-3'>
        <button onClick={() => dispatch(setOpen(true))} className='flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md'>
          <LuPencil size={'24px'} />
          compose
        </button>
      </div>

      <div className='text-gray-500'>
        {
          SidebarItems.map((item, index) => {
            return (
              <div key={index} className='flex items-center gap-4 pl-6  py-1 rounded-r-full  hover:cursor-pointer hover:bg-gray-200 my-2'>
                {item.icon} 
                <p>{item.text}</p>
              </div>

            )
          })
        }



      </div>
    </div>
  )
}

export default Sidebar