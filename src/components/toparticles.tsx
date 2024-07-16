

import React from 'react'
import styles from '@/components/dailynews.module.css'
import { posts } from '../models/posts';
import Image from 'next/image';
interface posts{
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
  return (
    <div className={styles.main}>
    <div className={styles.daily}>
    <h2>Top Articles</h2>
      {/* this becomes a grid */} 

      
    <div className={`grid lg:grid-cols-2  gap-5 px-8   ${styles.grid} `}  >
      {
        posts.map(posts => (
          <div className={styles.featuredpost} key={posts.title}>
          <div className={styles.imagewrapper}>
          <Image  className={styles.image}  src={posts.image[0]} alt='toparticles'   fill/>
          </div>
            <div className={styles.content}>
              <h3>{posts.title}</h3>
            <p>{posts.body}</p>
           <button>Read More</button>
            </div>
      
          </div>
          
        ))
      }

       
      
      



    </div>
    </div>

  
  

</div>
  )
}

export default Toparticles