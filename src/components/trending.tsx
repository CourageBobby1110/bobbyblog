
'use client'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image'
import styles from './carosel.module.css'
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


const Trending = ({posts}: posttype) => {
   
   
  return (
    <div className={`${styles.misc}`}>
        <h1>Trending</h1>
        <Swiper
        // navigation = {true}
    className={styles.swiper}
    autoplay={{
      delay: 4000,
      disableOnInteraction: true,
      
    }}
    
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true}}
      // scrollbar={{ draggable: true,  }}
      
      color=' #F37E11 '
     
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            posts.map(posts=> (
                <SwiperSlide className={styles.swiperSlide} key={posts.title}>
                <div className={styles.first}>
                  <div className={styles.imgdiv}>
                  <Image src={posts.image[0]} alt='airpods' height={300} width={300} className={styles.img}/>

                  </div>
              
                 <div>
                  <div className={styles.ft}>Featured post</div>
                   <h2>{posts.title}</h2>
                 <div className={styles.body}>
                 <p>{posts.body}</p>
                 <div className={styles.button}>
                 <button className={styles.btn}>
                   Read More
                 </button>
                 </div>
                 </div>
                 </div>
                 
                </div>
         
         
         
         
         
               
               
               </SwiperSlide>
            





            ))
        }
     

     
    
    
    </Swiper>

    </div>
  )
}

export default Trending