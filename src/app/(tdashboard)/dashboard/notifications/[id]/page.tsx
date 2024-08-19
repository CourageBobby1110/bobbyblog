import { cache } from 'react';
import styles from '../notification.module.css'

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




interface PageProps{
    params:{
      id: string
    }
   }


const ProductPage = async({params: {id}} : PageProps ) =>{
       console.log(id);
    const z = await getUserById((id));
    console.log(z);

    

   
    
     
  return(
    <div className={styles.board}>
      <div className={styles.main}>
      {
      z.message.length === 0 && z.role === 'tutor' &&  <div>You have no notifications for now</div>
     
      
     }
    {
       z.message.length > 0 && z.role ==='tutor ' && <div>{z.message}</div>
    }
    {
      z.message.length === 0 && z.role === 'user' && <div>You have no notifications for now</div>
    }
    {
      z.message.length > 0 && z.role === 'user' && <div>{z.message}</div>	
    }
      

      </div>
        
    </div>
  )


}

export default ProductPage;