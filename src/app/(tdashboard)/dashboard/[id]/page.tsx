import React from 'react'
import Sidenav from '../../components/sidenav';
import styles from '../tdashboard.module.css'
import Link from 'next/link';
import Image from 'next/image';
import Card from '../card';
import Sdashboard from '@/app/(studentdashboard)/sdashboard/sdashboard';
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