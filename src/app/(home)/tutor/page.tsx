import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link'
import React from 'react'
import Tutordashboard from "./tutordashboard";
import TutorReg from "./tutorreg";
import TutorVerified from "./verified";

const Tutor = async  () => {
    interface z{
        _id: string;
        firstName: string;
        lastName: string;
        image: string;
        role: string;
        price: number;
        email: string;
        isVerified : string;
        
    
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
     return {
      role: p.role,
      isVerified: p.isVerified
     }
  } )

  const stringdata = getpumarole.map(role => {
    return role.role=== 'tutor'  ? <div key={role.toString()}>{role.isVerified ==='true' ? <div><TutorVerified/></div>: <div><Tutordashboard/></div>}</div> : <div key={role.toString()}><TutorReg x={p?.id}/></div>
} )


     
  return (
   <div>
    <div>{stringdata}</div>
   </div>
  )
}

export default Tutor


