import React from 'react'
import { contactTypes } from './Contactform'

const Displaycontact = (props:{data:contactTypes[]}) => {
  return (
    <div className='w-full mx-auto max-w-fit'>

    <div>
      <table>
          <tr >
            <th className="px-3">Name</th>
            <th className="px-3">Email</th>
            <th className="px-3">Phone</th>
            <th className="px-3">CNIC</th>
            <th className="px-3">City</th>
            <th className="px-3">Country</th>
            <th className="px-3">University</th>
            <th className="px-3">Message</th>
          </tr>
      {props.data.map((item,index)=>{
        return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.cnic}</td>
              <td>{item.City}</td>
              <td>{item.Country}</td>
              <td>{item.university}</td>
              <td>{item.message}</td>
          </tr>
        )
      })}
       </table>
    </div>
    </div>
  )
}

export default Displaycontact