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
    <div className={styles.Imagewrapper}>
    <Image src='/roseflower0.svg' alt='rose' fill className={styles.image}></Image>
    </div>
     <h1>Welcome to your Dashboard</h1>
     <p>You have {user.tutor.length} Tutors </p>
 

    </div>

  <Link href={`/yourstudents/${id}`} className={styles.schedule}>
  <div className={styles.Imagewrapper}>
    <Image src='/roseflower1.svg' alt='rose' fill className={styles.image}></Image>
    </div>


  <div >

     
     <h1>Your Tutors</h1>
     <p>Here you will see your Tutors and the time you are to have a class with them</p>
    </div>
  </Link>

  

  

    

  




</div>
  )
}

export default Sdashboard