"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import styles from "./featuredpost.module.css";
import { posts } from "../models/posts";
import Link from "next/link";

interface posts {
  _id : string;
  title: string;
  body: string;
  date: string;
  author: string;
  image: string;
  // categories: string[];
}
interface posttype {
  posts: posts[];
}

const Trending = ({ posts }: posttype) => {
  return (
   
      
      <Swiper
        // navigation = {true}
        className={styles.featuredpost}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true,  }}

        color=" #F37E11 "
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {posts.map((posts) => (
          <SwiperSlide  key={posts.title}>
        <div className={styles.featured}>
        <div className={styles.imagewrapper}>
            <Image  className={styles.image}  src={posts.image[0]} alt='toparticles'  fill />
    </div>
      <div className={styles.content}>
        <h2>{posts.title}</h2>
      <p>{`${posts.body.slice(0, 200)}....`}</p>
     <button><Link  href={`/posts/${posts._id}`}     >Read more</Link></button>
      </div>
        </div>

           

           
          </SwiperSlide>
        ))}
      </Swiper>
   
  );
};

export default Trending;
