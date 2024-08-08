import React from 'react'

import Link from 'next/link';
import Image from 'next/image';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import styles from './pricing.module.css'


interface paymentProps{
    title: string;

    discount: string;
    pricings: string;
    date: string;
    q: string

}

const PageCard = async ({title, pricings, discount, date, q,}: paymentProps) => {
    const {getUser} =  getKindeServerSession();

  
  

    
    const user = await getUser();
  return (

    <div className={styles.main}>
      <div className={styles.bigbox}>
        <div className={styles.Imagewrapper}>
          <Image src="/poppyflower.svg" alt="poppyflower" fill className={styles.image}></Image>
        </div>

        <div className={styles.content}>
          <h1>{title}</h1>
          <p>
           Pricing: {pricings}/{date}
          </p>
          <p>{discount}</p>
          <div className={styles.link}>
            <Link href={{pathname: `/myaccount/${user?.id.toString()}`, query: {query:q} ,}} >Buy Now</Link>
            
          </div>
        </div>

      </div>
    </div>
   
       


                 




  
  )
}

export default PageCard

