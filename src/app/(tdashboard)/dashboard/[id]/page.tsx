import React from 'react'
import Sidenav from '../../components/sidenav';
import styles from '../tdashboard.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Card from '../card';
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
        const res = await fetch(`http://localhost:3000/api/user/${id}`, 
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
        user.role === 'tutor'? (<Card user={user} id={user.id}/>	) : (<Sdashboard user={user} id={user.id}/>)
      }
    </div>
  )
}

export default Tutordashboard