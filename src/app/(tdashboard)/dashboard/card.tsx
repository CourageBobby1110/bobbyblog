import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './tdashboard.module.css'
interface CardProps{
    user: any
    id : string;
}
const Card = ({user, id}: CardProps) => {
  return (
    <div>
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





    </div>
  )
}

export default Card