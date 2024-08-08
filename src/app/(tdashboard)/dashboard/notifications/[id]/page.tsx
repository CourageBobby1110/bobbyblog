import { cache } from 'react';
import styles from '../notification.module.css'

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


const ProductPage = async({params: {id}} : PageProps ) =>{
       console.log(id);
    const z = await getUserById((id));
    console.log(z);

    

   
    
     
  return(
    <div className={styles.board}>
      <div className={styles.main}>
        <p>{z.isVerified}</p>
        <p>{z.courses[0]}</p>

      </div>
        
    </div>
  )


}

export default ProductPage;