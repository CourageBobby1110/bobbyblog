import { cache } from 'react';
import styles from '../students.module.css'
import Link from 'next/link';
import ComingSoon from '@/components/comingsoon';
import Construction from '@/components/construction';

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




interface PageProps{
    params:{
      id: string
    }
   }


const Students = async({params: {id}} : PageProps ) =>{
       console.log(id);
    const z = await getUserById((id));
    console.log(z);

    

   
    
     
  return(
    <div className={styles.main}>
     <ComingSoon/>
   
        
    </div>
  )


}

export default Students;