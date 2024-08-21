'use client'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FacebookShareButton, InstapaperShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'

import styles from '../../../components/footer.module.css'
import { FaWhatsapp } from 'react-icons/fa'

const Cards = () => {
  return (
    <div className={styles.socialicons}>


<div>
<FacebookShareButton url={`${process.env.NEXT_PUBLIC_BASE_URL}`} title='Ravens Academy' className={styles.link}>
          <FaFacebook /> Facebook
        </FacebookShareButton>
</div>
        
        <div>
        <TwitterShareButton url={`${process.env.NEXT_PUBLIC_BASE_URL}`} title='Ravens Academy' className={styles.link}>
          <FaXTwitter />
        </TwitterShareButton>
        </div>
      <div>
      <LinkedinShareButton url={`${process.env.NEXT_PUBLIC_BASE_URL}`} title='Ravens Academy' className={styles.link}>
        <FaLinkedin />linkedIn
        </LinkedinShareButton>
      </div>
       <div>
       <WhatsappShareButton url={`${process.env.NEXT_PUBLIC_BASE_URL}`} title='Ravens Academy' className={styles.link}>
        <FaWhatsapp /> Whatsapp
        </WhatsappShareButton>
       </div>







    </div>
  )
}

export default Cards