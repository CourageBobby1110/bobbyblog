import React from 'react'
import Image from 'next/image';
import styles from '../posts.module.css'
import { moment } from '../format';
import cards from '../cards'
import Link from 'next/link';
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import Cards from '../cards';

interface PageProps{
    params : {
      id: string;
    }
  }

  const getPostById = async (id: string) =>{
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${id}`
        )
        return res.json()
        
    } catch (error) {
        console.log(error);
        
    }


}


const page = async ({params: {id}}:PageProps) => {
 
 
    const posts = await getPostById(id)
    const formatedDate = moment(posts.createdAt).format('MMMM Do, YYYY')
    const postSplit = posts.body.split('\n\n')
  return (
    <div>
        <div className={styles.main}>
        <div>
            <h1>{posts.title}</h1>
        </div>
        <div className={styles.date}>
          <p>Posted on : {formatedDate}</p>
          <p>Written by : {posts.author}</p>
        </div>
       <div className={styles.Imagewrapper}>
        <div><Image src={posts.image[0]} alt='imageposts' className={styles.image} fill></Image></div>
        
       </div>
       <div className={styles.body}>
        {postSplit.map((paragraph: string , index: React.Key | null | undefined) =>(<p key={index}>{paragraph}</p>))}

       </div>

       <div className={styles.sharepost}>
       <p> Share this post: </p>
       <div className={styles.social}>
        <Cards/>
        
       
       </div>
          

          </div>
        </div>
         <div>

         <div className={styles.link}>
         <div className={styles.gohome}>
         <Link href={'/'}>Go back home</Link>
         </div>
         </div>



         </div>
       

    </div>
  )
}

export default page