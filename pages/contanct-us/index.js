import React, { useState,useRef } from 'react'
const Form=()=>{
  const[email,setEmail]=useState("");
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[message,setMessage]=useState("")
  const[messageC,setMessageC]=useState("")

     const submitHandler=async(e)=>{
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      e.preventDefault();
      if(!email.match(validRegex)){
        setMessage("invalid email address")
      }
      try{
        const response=await fetch('/api/contact',{
          method:"POST",
          headers:{
            "Content-Type":'application-json',
          },
          body:JSON.stringify({
            firstName,
            lastName,
            email,
            
          })
        })
        const data=await response.json();
        setMessage(data.msg)
      }catch(err){
        console.log(err)
      }
      console.log(firstName,lastName,email,messageC);
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessageC("")
    }
 
  return (

    <div className='bg-pink-200 mt-[230px] wrapper'>
        <form  className='px-2 py-[15px] my-[30px] w-[90%]
         md:max-w-screen-md mx-auto ' onSubmit={submitHandler} >
            <div className='w-full'>
                <label htmlFor='fname'>First Name<span className='text-red-500'>(required)</span></label><br/>
                <input id='fname' value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder='first name' required className='w-full py-[10px] pl-5 text-md outline-none rounded-md' type='text' />
            </div>
            <div className='w-full '>
                <label htmlFor='lname'>Last Name<span className='text-red-500'>(required)</span></label><br/>
                <input id='lname'value={lastName}onChange={(e)=>setLastName(e.target.value)} placeholder='last name' required className='w-full py-[10px] pl-5 text-md outline-none rounded-md' type='text' />
            </div>
            <div className='w-full'>
                <label htmlFor='email'>Email<span className='text-red-500'>(required)</span></label><br/>
                <input id='email' placeholder='email'value={email} onChange={(e)=>setEmail(e.target.value)} required className='w-full py-[10px] pl-5 text-md outline-none rounded-md' type='text' />
            </div>
            <div className='w-full'>
                <label htmlFor='message'>Message<span className='text-red-500'>(required)</span></label><br/>
                <textarea id='message' placeholder='message'value={messageC} onChange={(e)=>setMessageC(e.target.value)} required 
                className='w-full py-[10px] pl-5 text-md outline-none rounded-md' type='text' ></textarea>
            </div>
            
            <button type='submit' className='text-white bg-black py-2 px-6 mt-5 rounded-lg hover:bg-neutral-400
            active:bg-neutral-700
            '>submit</button>
            <p className="text-red-600">{message}</p>
        </form>
    </div>
  )
}   

export default Form