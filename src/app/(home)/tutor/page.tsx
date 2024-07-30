import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link'
import React from 'react'
import Tutordashboard from "./tutordashboard";
import TutorReg from "./tutorreg";

const Tutor = async  () => {
    interface z{
        _id: string;
        firstName: string;
        lastName: string;
        image: string;
        role: string;
        price: number;
        email: string;
        
    
      }

    
const getUsers = async() => {

    try {
      const res = await fetch(` ${process.env.NEXT_PUBLIC_BASE_URL}/api/user`, {
        cache: 'no-store'
      });
      return res.json();
      
    } catch (error) {
        console.log(error)
      
    }
   
  }
  const {getUser} =  getKindeServerSession();
  const p = await  getUser()
  const users = await getUsers() as z[];
  const puma =  users.filter((user) => user._id === p?.id as string )
  const getpumarole = puma.map(p =>{
     return p.role
  } )

  const stringdata = getpumarole.map(role => {
    return role === 'tutor'? <div key={role.toString()}><Tutordashboard/></div> : <div key={role.toString()}><TutorReg x={p?.id}/></div>
} )


     
  return (
   <div>
    <p>{stringdata}</p>
   </div>
  )
}

export default Tutor


