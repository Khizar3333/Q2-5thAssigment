"use client"
import React, { useState } from 'react'
import Displaycontact from './Displaycontact'
import * as yup from "yup"

const validation=yup.object().shape({
  
  name: yup.string().required().min(5).max(10),
  email: yup.string().email().required(),
  phone:yup.number().positive().min(11),
  cnic:yup.number().positive().min(13),
  university: yup.string().required(),
  City: yup.string().required(),
  Country: yup.string().required(),
  message: yup.string().required()


})

export type contactTypes = {
 
    name: string,
    email:string,
    phone:number,
    cnic:number,
    university:string,
    City:string
    Country:string
    message:string
  }
  type event={
    target: { value: string, name:string} 
  }

const Contactform = () => {
    const [info, setInfo] = useState<contactTypes>({
     
     name:"",
      email:"",
      phone:0,
      cnic:0,
      university:"",
      City:"",
      Country:"",
      message:""
})
const [error, setError] = useState<string[]>([])
const [list, setList] = useState<contactTypes[]>([])
    const onchange=(e:event)=>{
   
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
    }

  const clickhandler=async()=>{

    try {
      const result=await validation.validate(info)
      console.log(result)
      if(!result){
        return
      }
      let newlist:contactTypes[]=[...list,info]
  
      setList(newlist)
      setError([])
      setInfo({
         name:"",
        email:"",
        phone:0,
        cnic:0,
        university:"",
        City:"",
        Country:"",
        message:""
      })      


    } catch (err) {
      setError(err.errors)
     console.log("error",err.errors) 
    }
   
  }
  return (
    <>
    
    <form className="max-w-md mx-auto">
           
        
    <div className="mb-4">

      
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        name
      </label>
      <input
        onChange={onchange}
        value={info.name}
        type="text"
        id="name"
        name="name"
        className="w-full px-3 py-2 border rounded-md"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Email
      </label>
      <input
        value={info.email}
        onChange={onchange}
        type="email"
        id="email"
        name="email"
        className="w-full px-3 py-2 border rounded-md"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
        Phone
      </label>
      <input
        value={info.phone}
        onChange={onchange}
        type="number"
        id="phone"
        name="phone"
        className="w-full px-3 py-2 border rounded-md"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        CNIC
      </label>
      <input
        type="number"
        value={info.cnic}
        onChange={onchange}

        id="cnic"
        name="cnic"
        className="w-full px-3 py-2 border rounded-md"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
    City        
      </label>
      <input
        type="text"
        onChange={onchange}

        id="City"
        value={info.City}
        name="City"
        className="w-full px-3 py-2 border rounded-md"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
        Country
      </label>
      <input
      value={info.Country}
      onChange={onchange}
      
        type="text"
        id="Country"
        name="Country"
        className="w-full px-3 py-2 border rounded-md"
        required
      />
    </div>

    {/* Add additional fields here */}
    <div className="mb-4">
      <label htmlFor="field2" className="block text-gray-700 text-sm font-bold mb-2">
        University
      </label>
      <input
        type="text"
        value={info.university}
        onChange={onchange}

        id="university"
        name="university"
        className="w-full px-3 py-2 border rounded-md"
        required
      />
    </div>

    <div className="mb-4">
      <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
        Message
      </label>
      <textarea
       value={info.message}
    onChange={onchange}

        id="message"
        name="message"
        rows={4}
        className="w-full px-3 py-2 border rounded-md"
        required
      ></textarea>
    </div>
  
      
    
    {error?.map((item)=>{
          return (
            <div style={{color:"red"}}>
              <h1>{item}</h1>
            </div>
          )
        })}
     
    <div className="mb-6">
      <button
        onClick={clickhandler}
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
    </form>
    <Displaycontact data={list}/>
</>
  )
}

export default Contactform
