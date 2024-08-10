import React from 'react'
import styles from './comingsoon.module.css'
import Image from 'next/image'

const ComingSoon = () => {
  return (
    <div className={styles.board}>
        <div className={styles.coming}>
        <div className={styles.imagewrapper}>
            <Image  src='/poppyflower.svg' alt='image' fill className={styles.image}></Image>
        </div>

        <div className={styles.soon}>
            <p>coming soon....</p>
        <p>This section is currently under construction.</p>

<p>Please check back soon for updates.</p>

<p>Thanks for your patience.</p>
        </div>





    </div>
    </div>
  )
}

export default ComingSoon