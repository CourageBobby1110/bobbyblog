'use client'

import React from 'react'
import styles from './footer.module.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import { addEmail } from '@/lib/footer';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Triangle } from 'react-loader-spinner';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';
interface Inputs{
  email: string;
  id: string;
}

const Footer = () => {
  const {user} = useKindeBrowserClient();
  const {
    register,
    handleSubmit,
   
  
    formState: { errors, isSubmitting },
    reset
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 4000)); 
    
    // Simulate a delay for server response
   
      addEmail({mail: data.email, userId: user?.id } )
   
   
    // Handle the data here
 
  

  };
  return (
    <div className={styles.main}>
          <div className={styles.footermain}>
        <div className={styles.container}>
            <div className={styles.all}>
                <div className={styles.content}>
                    <h2>Stay up to date</h2>
                    <p>Get notified when i publish something new.</p>
                </div>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputdiv}>
            <div className={styles.boxdiv}>
            <input   {...register("email", { required:'email is required',   validate: value => value.includes('@') }, )}
             type="text" placeholder='Email address' />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
              <button disabled={isSubmitting} type="submit" className={styles.btn} >
          {isSubmitting ? (
            
           <div className={styles.loader}>
             {/* <InfinitySpin
            
           
            
            width="100"
            color="#FFFFFF"
           
            
           
            /> */}

<Triangle
  visible={true}
  height="50"
  width="80"
  color="#FFFFFF"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
           </div>
              
            
          ) : (
            'Join'
          )}
        </button>
                </div>
              </form>
            </div>
            



        </div>
    </div>

    <div className={styles.social}>
    
    
      <div className={styles.board}>
      <h2>Connect with me :</h2>
        <div className={styles.socialicons}>
        <Link href={'/'}> <FaFacebook />Facebook</Link>
        <Link href={'/'}  ><FaXTwitter /></Link>
        <Link href={'/'}   ><FaInstagramSquare />Instagram</Link>
        <Link href={'/'}        > <FaLinkedin />               LinkedIn</Link>
        </div>

        <div>
          &copy; All rights reserved 2024, Powered by <Link href={'/'} >Kinde</Link>
        </div>
      </div>







    </div>
    </div>

  
  )
}

export default Footer