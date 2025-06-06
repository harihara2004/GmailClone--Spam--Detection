import React from 'react'
import { IoMdMore, IoMdArrowBack } from "react-icons/io";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdDeleteOutline,
  MdOutlineReport,
  MdOutlineMarkEmailUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import { BiArchiveIn } from "react-icons/bi";
import {  useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteDoc,doc } from 'firebase/firestore';
import{db} from'../firebase';
import { motion } from 'framer-motion';




const Mail = () => {
  
  const navigate = useNavigate();
  const { selectedEmail } = useSelector(store => store.AppSlice);
  const params =useParams();
  const deleteMailById = async (id) => {
    console.log("deleteMailById called with ID:", id);
    console.log("deleteMailById - params.id:", params.id);
      try {
        await deleteDoc(doc(db, "emails", id));
        navigate("/");
      } catch (error) {
        console.log(error);
        
    console.log("selectedEmail:", selectedEmail); // Log the entire selectedEmail obje
      }
    }
  return (
    <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className='flex-1 bg-[#f1f1f1] rounded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div onClick={() => navigate("/")} className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdArrowBack size="20px" />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <BiArchiveIn size="20px" />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineReport size="20px" />
          </div>
          
       <div onClick={()=>deleteMailById(params.id)} className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
        <MdDeleteOutline size="20px" />
        
         </div>

          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineMarkEmailUnread size="20px" />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineWatchLater size="20px" />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineAddTask size="20px" />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineDriveFileMove size="20px" />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdMore size="20px" />
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <button className='hover:rounded-full hover:br-gray-100'><MdKeyboardArrowLeft size="24px" /></button>
          <button className='hover:rounded-full hover:br-gray-100'><MdKeyboardArrowRight size="24px" /></button>
        </div>
        </div>
        <div className='h-[90vh] overflow-y-auto p-4'>
          <div className='flex items-center justify-between bh-white gap-1'>
            <div className='flex items-center gap-2'>
              <h1 className='text-xl font medium'>{selectedEmail?.Subject}</h1>
              <span className='text-sn bg-gray-200 rounded-md px-2'>inbox</span>
            </div>
<div className='flex-none text-gray-400 my-5 text-sn'>
  <p> {new Date (selectedEmail?.createdAt?.seconds*1000).toUTCString()}</p>
</div>
          </div>
          <div className='text-gray-500 text-sn'>
            <h1> {selectedEmail?.to}</h1>
            <span> to me </span>
          </div>
          <div className='my-10'>
            <p>{selectedEmail?.message}</p>
          </div>
        </div>
      </motion.div>
   



  )
}

export default Mail

