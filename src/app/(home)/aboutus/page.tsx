import React from 'react'
import styles from './aboutus.module.css'

const AboutUs = () => {
  return (
    <div className={styles.about}>
        <div className={styles.main}>
            <h1>About Us</h1>
            <h2>Ravens Academy: Your Path to Tech Mastery</h2>
            <p className={styles.para}>
Ravens Academy is your gateway to a thriving career in web and mobile app development. We are more than just a coding school; we are a community of passionate learners and skilled developers.

Our mission is to equip individuals with the practical skills and knowledge needed to excel in today  fast-paced tech industry. Through our comprehensive curriculum, you will master full-stack development, from front-end design to back-end architecture.

Beyond the classroom, we are  committed to fostering a love of learning. Our blog is a treasure trove of educational content, offering insights, tutorials, and industry trends. Whether you are a budding developer or a seasoned pro, you will find valuable resources to enhance your skills and stay ahead of the curve.

Join us at Ravens Academy and unlock your potential to build extraordinary digital experiences.</p>
        </div>

    </div>
  )
}

export default AboutUs