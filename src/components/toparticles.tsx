'use client'
import React, { useState } from 'react'
import styles from '@/components/dailynews.module.css'
import { posts } from '../models/posts';
import Image from 'next/image';
import Link from 'next/link';
import { trimmedText } from '@/lib/trimmedtext';

interface posts{
  _id: string;
  title: string;
  body: string;
  date: string;
  author: string;
  image: string;
  // categories: string[];
}
interface posttype{
  posts: posts[]
}

const Toparticles = ({posts}: posttype) => {
    const[read, setIsRead] = useState(false)
    const[visiblePosts, setVisiblePosts] = useState(4)

  return (
    <div className={styles.main}>
        <div className={styles.daily}>
        <h2>Top Articles</h2>
      

        <div className={`grid lg:grid-cols-2  gap-5 px-8   ${styles.grid} `}  style={{
        
        }} >
          {
            posts.slice(0, visiblePosts).map(post => (
              <div className={styles.featuredpost} key={post.title}>
              <div className={styles.imagewrapper}>
              <Image  className={styles.image}  src={post.image[0]} alt='toparticles'  fill/>
              </div>
                <div className={styles.content}>
                  <h3>{post.title}</h3>
                <p>{`${post.body.slice(0, 200)}....`}</p>
              <Link href={`/posts/${post._id}`}> <button>Read More</button></Link>
                </div>
          
              </div>
              
            ))
          }
        </div>

        <div className={styles.btn}>
          <button onClick={()=> {
            
            setIsRead(!read)
            setVisiblePosts(read ? 4 : posts.length)
          }}>{
            read? 'Show Less' : 'Show More'
            }</button>
        </div>
        </div>
    </div>
  )
}

export default Toparticles