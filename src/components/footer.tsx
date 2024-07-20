import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.main}>
          <div className={styles.footermain}>
        <div className={styles.container}>
            <div className={styles.all}>
                <div className={styles.content}>
                    <h2>Stay up to date</h2>
                    <p>Get notified when i publish something new.</p>
                </div>
                <div className={styles.inputdiv}>
                <input type="text" placeholder='Email address' />
                <button>Join</button>
                </div>
            </div>
            



        </div>
    </div>
    </div>
  
  )
}

export default Footer