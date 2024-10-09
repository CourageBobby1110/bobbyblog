import React from 'react'
import styles from './aboutus.module.css'

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.title}>About Us</h1>
        <h2 className={styles.subtitle}>Ravens Academy: Empowering Lifelong Learning</h2>
        <p className={styles.para}>
          Ravens Academy is an innovative platform that offers education across all walks of life. Whether you are delving into the complexities of business, exploring the realms of science, or sharpening your financial skills, 
          Ravens Academy is here to provide you with the knowledge and tools to thrive.
        </p>
        <p className={styles.para}>
          Our mission is to teach, inspire, and guide individuals through every stage of their learning journey. We cover a wide range of topics to ensure that everyone, regardless of their field, has access to high-quality, 
          comprehensive learning resources. From professional development to personal growth, Ravens Academy is dedicated to helping you succeed.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
