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

const DailyNews = ({posts}: posttype) => {
  return (
    <div className={styles.main}>
        <div className={styles.daily}>
        <h2>Recent Articles</h2>
          {/* this becomes a grid */} 

          
        <div className={`grid lg:grid-cols-2  gap-5 px-8   ${styles.grid} `}  >
          {
            posts.map(posts => (
              <div className={styles.featuredpost} key={posts.title}>
              <div className={styles.imagewrapper}>
              <img alt='featured post' className={styles.image} src={posts.image} />
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

export default DailyNews