
import styles from './contactUs.module.css'
import Image from 'next/image'


const ContactUs = () => {
  return (
    <div className={styles.board}>
       <div className={styles.main}>
      
        <div className={styles.content}>
        <h1>Contact Us</h1>
        <p>For any queries or inquiries, please dont hesitate to reach out.</p>
        <p>Email: Ravensraven80@gmail.com</p>
        <p>Phone: +2349038583744</p>
         <p>Whatsapp: +2349038583744</p>
        <p>Hours: Monday - Friday 9 AM - 5</p>
        </div>
       </div>
    </div>
  )
}

export default ContactUs