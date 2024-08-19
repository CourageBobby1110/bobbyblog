'use client'

import React from 'react'
import styles from './footer.module.css'
import { SubmitHandler, useForm } from 'react-hook-form';
import { addEmail } from '@/lib/footer';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { Triangle } from 'react-loader-spinner';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {TwitterShareButton} from 'react-share'
import { FacebookShareButton } from 'react-share';
import { InstapaperShareButton } from 'react-share';
import { LinkedinShareButton } from 'react-share';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';
import { toast, Toaster } from 'sonner';
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
   
 try {
  addEmail({mail: data.email, userId: user?.id } )
  toast.success("Email added successfully")
  
  
  
 } catch (error) {
  toast.error("Failed to add email")
  
 }
 reset();
   
   
    // Handle the data here
 
  

  };
  return (
    <div className={styles.main}>
      <Toaster richColors/>
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
      
        <FacebookShareButton url='http://localhost:3000' title='Ravens Academy' className={styles.link}>
          <FaFacebook /> Facebook
        </FacebookShareButton>
        
        <TwitterShareButton url='http://localhost:3000' title='Ravens Academy' className={styles.link}>
          <FaXTwitter />
        </TwitterShareButton>
        <LinkedinShareButton url='http://localhost:3000' title='Ravens Academy' className={styles.link}>
        <FaLinkedin />linkedIn
        </LinkedinShareButton>
        <InstapaperShareButton url='http://localhost:3000' title='Ravens Academy' className={styles.link}>
        <FaInstagram />Instagram
        </InstapaperShareButton>
        
        
       
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