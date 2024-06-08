import React from 'react'
import styles from '@/components/dailynews.module.css'
import { posts } from '../models/posts';

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
    <div>
        <div className={styles.daily}>
        <h2>Recent Articles</h2>
          {/* this becomes a grid */} 
        <div className={styles.grid}>
          {
            posts.map(posts => (
              <div className={styles.card} key={posts.title}>
                <img src={posts.image} alt={posts.title} width={300} height={300} />
                <h3>{posts.title}</h3>
                <p>{posts.body}</p>
              </div>
            ))
          }

           
          
          



        </div>

        </div>
      

    </div>
  )
}

export default DailyNews