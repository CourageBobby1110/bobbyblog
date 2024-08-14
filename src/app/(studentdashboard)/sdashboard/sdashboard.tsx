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
     <p>You are amazing 😊</p>
 

    </div>

  <Link href={`/dashboard/yourstudents/${id}`} className={styles.schedule}>
  <div className={styles.Imagewrapper}>
    <Image src='/roseflower1.svg' alt='rose' fill className={styles.image}></Image>
    </div>


  <div >

     
     <h1>Your Courses</h1>
     <p>fill up a form to get started</p>
    </div>
  </Link>

  <Link href={'/'} className={styles.home}>Go home</Link>

  

  

    

  




</div>
  )
}

export default Sdashboard