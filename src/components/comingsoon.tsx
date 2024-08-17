import React from 'react'
import styles from './coming.module.css'
import Image from 'next/image'
import { MdConstruction } from "react-icons/md";

const ComingSoon = () => {
  return (
    <div className={styles.board}>
        <div className={styles.coming}>


        <div className={styles.icondiv}>
          <div>
          <MdConstruction className={styles.icon}/>
          </div>
          
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