import { cache } from 'react';
import styles from '../students.module.css'
import Link from 'next/link';

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
     {
      z.message.length === 0 && z.role === 'tutor' &&  <div>You have no students</div>
     
      
     }
    {
       z.message.length > 0 && z.role ==='tutor ' && <div>{z.message}</div>
    }
    {
      z.message.length === 0 && z.role === 'user' && <div><p>You have no Tutors</p> <p className={styles.link}> <Link href={'/search'} >Hire one</Link></p></div>
    }
    {
      z.message.length > 0 && z.role === 'user' && <div>{z.message}</div>	
    }
        
    </div>
  )


}

export default Students;