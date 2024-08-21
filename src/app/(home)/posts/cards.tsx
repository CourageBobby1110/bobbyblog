'use client'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'

import styles from '../../../components/footer.module.css'

const Cards = () => {
  return (
    <div className={styles.socialicons}>


<FacebookShareButton url={`${process.env.NEXT_PUBLIC_BASE_URL}`} title='Ravens Academy' className={styles.link}>
          <div className={styles.social}><FaFacebook /> Facebook</div>
        </FacebookShareButton>
        
        <TwitterShareButton url={`${process.env.NEXT_PUBLIC_BASE_URL}`} title='Ravens Academy' className={styles.link}>
          <FaXTwitter />
        </TwitterShareButton>
        <LinkedinShareButton url={`${process.env.NEXT_PUBLIC_BASE_URL}`} title='Ravens Academy' className={styles.link}>
        <FaLinkedin />linkedIn
        </LinkedinShareButton>
        <InstapaperShareButton url={`${process.env.NEXT_PUBLIC_BASE_URL}`} title='Ravens Academy' className={styles.link}>
        <FaInstagram />Instagram
        </InstapaperShareButton>







    </div>
  )
}

export default Cards