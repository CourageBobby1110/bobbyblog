import React from 'react'
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
              <Image  className={styles.image}  src={posts.image[0]} alt='toparticles'  fill/>
              </div>
                <div className={styles.content}>
                  <h3>{posts.title}</h3>
                <p>{`${posts.body.slice(0, 200)}....`}</p>
              <Link href={`/posts/${posts._id}`}> <button>Read More</button></Link>
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