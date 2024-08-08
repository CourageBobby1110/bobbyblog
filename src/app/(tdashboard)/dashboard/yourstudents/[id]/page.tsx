import { cache } from 'react';
import styles from '../students.module.css'

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
      z.message.length === 0?
      <h1>You dont have any Students For now</h1>:
      <div className={''}>
      <p>{z.isVerified}</p>
      <p>{z.courses[0]}</p>

    </div>
     }
        
    </div>
  )


}

export default Students;