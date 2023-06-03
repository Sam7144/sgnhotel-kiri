import React, { useState,useRef } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

function Form() {
  const [startDate,setStartDate]=useState(new Date());
  const [endDate,setEndDate]=useState(new Date());
  const[noOfGuests,setNoOfGuests]=useState(1);
  const[email,setEmail]=useState("");
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[message,setMessage]=useState("")
  const resetFname=useRef();
  const resetLname=useRef();
  const resetEmail=useRef();
  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const selectionRange={
    startDate:startDate,
    endDate:endDate,
    key:'selection'
  }
     const submitHandler=async(e)=>{
      const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      e.preventDefault();
      if(!email.match(validRegex)){
        setMessage("invalid email address")
      }
      try{
        const response=await fetch('/api/booking',{
          method:"POST",
          headers:{
            "Content-Type":'application-json',
          },
          body:JSON.stringify({
            firstName,
            lastName,
            email,
            noOfGuests,
            startDate,
            endDate
          })
        })
        const data=await response.json();
        setMessage(data.msg)
      }catch(err){
        console.log(err)
      }
      console.log(firstName,lastName,email,noOfGuests);
      setFirstName("");
      setLastName("");
      setEmail("");
      setStartDate(new Date());
      setEndDate(new Date())
      setNoOfGuests(1)


   }
 
  return (

    <div className='bg-pink-200 wrapper w-full'>
        <form  className='px-2 py-[15px] my-[30px] w-[90%]
         md:max-w-screen-md mx-auto ' onSubmit={submitHandler} >
            <div className='w-full'>
                <label htmlFor='fname'>First Name<span className='text-red-500'>(required)</span></label><br/>
                <input id='fname' value={firstName} onChange={(e)=>setFirstName(e.target.value)} ref={resetFname} placeholder='first name' required className='w-full py-[10px] pl-5 text-md outline-none rounded-md' type='text' />
            </div>
            <div className='w-full '>
                <label htmlFor='lname'>Last Name<span className='text-red-500'>(required)</span></label><br/>
                <input id='lname'value={lastName}onChange={(e)=>setLastName(e.target.value)} ref={resetLname} placeholder='last name' required className='w-full py-[10px] pl-5 text-md outline-none rounded-md' type='text' />
            </div>
            <div className='w-full'>
                <label htmlFor='email'>Email<span className='text-red-500'>(required)</span></label><br/>
                <input id='email' placeholder='email'value={email} onChange={(e)=>setEmail(e.target.value)} ref={resetEmail} required className='w-full py-[10px] pl-5 text-md outline-none rounded-md' type='text' />
            </div>
            <div className='flex flex-col col-span-3 mx-auto my-2 '>
            <DateRangePicker ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#FD5B61"]}
          onChange={handleSelect}
          className='ant-picker-panels'
          />
          </div>
            <div className='w-full'>
                <label htmlFor='guests'>Number Of Guests<span className='text-red-500'>(required)</span></label><br/>
                <input id='guests' value={noOfGuests} 
                placeholder='number of guests'required onChange={(e)=>setNoOfGuests(e.target.value)}
                className='w-full py-[10px] pl-5 text-md outline-none rounded-md' type='number' />
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