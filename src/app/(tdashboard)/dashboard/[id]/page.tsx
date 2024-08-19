import React from 'react'

import Sdashboard from '@/app/(studentdashboard)/sdashboard/sdashboard';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';
interface PageProps{
    params : {
      id: string;
    }
  }

  const getUserById = async (id: string) =>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`, 
          {
            cache: 'no-store'
          }
        )
        return res.json()
        
    } catch (error) {
        console.log(error);
        
    }


}
  

const Tutordashboard =  async ({params: {id}}: PageProps) => {
  const {isAuthenticated} = getKindeServerSession();
  const isLoggedIn = await  isAuthenticated();
  if (!isLoggedIn) {
    redirect('/api/auth/login')
  }

  const user = await getUserById(id)

  return (
    <div>
      {
         <Sdashboard user={user} id={user._id}/>
      }
    </div>
  )
}

export default Tutordashboard