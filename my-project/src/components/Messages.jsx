import React, { useEffect, useState } from 'react';
import Message from './Message'
import { collection, onSnapshot,  orderBy,  query } from 'firebase/firestore';
import { db } from '../firebase';
import { useDispatch,useSelector  } from 'react-redux';
import { setEmails } from '../redux/AppSlice';

import Store from '../redux/Store';


const Messages = () => {
  const {searchText,emails}=useSelector(Store=>Store.AppSlice);
  const[tempEmails,setTempEmails]=useState(emails);

  const dispatch=useDispatch();
  
useEffect(()=>{
   const q=query(collection(db,"email"),orderBy('createdAt','desc'))
  const unsubscribe = onSnapshot (q, (snapshot) => {
  const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
dispatch(setEmails(allEmails)); 
})
  //cleanup
  return()=> unsubscribe();
},[]);
useEffect(()=>{
  const filteredEmail=emails?.filter((email)=>{
    return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||email?.message?.toLowerCase().includes(searchText.toLowerCase())
  })
  setTempEmails(filteredEmail);
  },[searchText,emails]);
  useEffect(()=>{

  })
  return (
    <div>
      {
        tempEmails&&tempEmails?.map((email)=><Message email={email} />)
      }
      
      
    </div>
  )
}

export default Messages

