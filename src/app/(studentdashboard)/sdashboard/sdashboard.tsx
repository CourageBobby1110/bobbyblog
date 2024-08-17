import Link from 'next/link';
import React from 'react'
import styles from '../../(tdashboard)/dashboard/tdashboard.module.css'
import Image from 'next/image';



interface PageProps{
  user: any
  id: string;
}

const Sdashboard = async ({user, id}: PageProps) => {
   
  return (
    <div className={styles.new}>
    <div className={styles.welcome}>
   
     <h1>Welcome to your Dashboard</h1>
     <p>You are amazing 😊</p>
 

    </div>

  <Link href={`/dashboard/yourstudents/${id}`} className={styles.schedule}>



  <div >

     
     <h1>Your Courses</h1>
     <p>Here you will find your courses</p>
    </div>
  </Link>

 

  

  

    

  




</div>
  )
}

export default Sdashboard