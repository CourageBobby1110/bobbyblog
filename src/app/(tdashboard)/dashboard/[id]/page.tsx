import React from 'react'
import Sidenav from '../../components/sidenav';
import styles from '../tdashboard.module.css'
import Link from 'next/link';
import Image from 'next/image';
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
    <div className={styles.new}>
             <div className={styles.welcome}>
             <div className={styles.Imagewrapper}>
             <Image src='/roseflower0.svg' alt='rose' fill className={styles.image}></Image>
             </div>
              <h1>Welcome to your Dashboard</h1>
              <p>You have {user.tutor.length} students </p>
          

             </div>

           <Link href={`/yourstudents/${id}`} className={styles.schedule}>
           <div className={styles.Imagewrapper}>
             <Image src='/roseflower1.svg' alt='rose' fill className={styles.image}></Image>
             </div>


           <div >
         
              
              <h1>Your students</h1>
              <p>Here you will see your students and the time you are to take them.</p>
             </div>
           </Link>

           

           

             

           




    </div>
  )
}

export default Tutordashboard