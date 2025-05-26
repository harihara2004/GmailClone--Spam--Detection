import React, { useState } from 'react';
import { GoTag } from 'react-icons/go';
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { FaCaretDown, FaUserFriends } from 'react-icons/fa';
import { IoMdMore, IoMdRefresh } from 'react-icons/io';
import Messages from './Messages';




const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "primary"
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "promotions"
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Social"
  },
];

const Box = () => {
  const [mailTypeSelected, setmailTypeSelected] = useState(0);
  return (
    <div className='flex-1 bg-[#f1f1f1] rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-Gray-700 py-2'>
          <div className='flex items-center gap-1'>
            <MdCropSquare size={'20px'} />
            <FaCaretDown size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdRefresh size={"20px"} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-5m text-gray-500'>1-50 of 100</p>
          <button className='hover:rounded-full hover:br-gray-100'><MdKeyboardArrowLeft size="24px"/></button>
          <button className='hover:rounded-full hover:br-gray-100'><MdKeyboardArrowRight size="24px"/></button>
        </div>
      </div>
      <div className='h-[90vh] overflow-y-auto'>
        <div className='flex items-center gap-1'>
          {mailType.map((item, index) => {
            return (
              <button
                key={index}
                className={`${
                  mailTypeSelected === index
                    ? 'border-b-4 border-b-blue-600 text-blue-600'
                    : 'border-b-4 border-b-transparent'
                } flex items-center gap-5 w-52 p-4 hover:bg-gray-100`}
                onClick={() => {
                  setmailTypeSelected(index);
                }}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
        <Messages/> 
      
      </div>
    </div>
  );
};

export default Box;