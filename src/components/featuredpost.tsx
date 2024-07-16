import React from 'react'
import Image from 'next/image';
import styles from '@/components/featuredpost.module.css'


const FeaturedPost = () => {
  return (
    <div className={styles.featuredpost}>
    <div className={styles.imagewrapper}>
    <Image alt='featured post' className={styles.image} src='https://plus.unsplash.com/premium_photo-1718198500377-99a629a057c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8' height={300} width={300}/>
    </div>
      <div className={styles.content}>
        <h2>Apple Vision Pro</h2>
      <p>Apple Vision Pro: VR headset blends digital world with physical space. rich in amazing things like entertainment,Apple Vision Pro blends virtual reality with your surroundings. Its high-resolution display offers a movie theater-like experience, while 3D capture lets you relive memories in a whole new way. Spatial audio creates immersive sound that seems to come from within the virtual world. Though expensive, it's praised for its hand and eye tracking, but criticized for its lack of popular apps and short battery life.</p>
     <button>Read More</button>
      </div>

    </div>
  )
}

export default FeaturedPost