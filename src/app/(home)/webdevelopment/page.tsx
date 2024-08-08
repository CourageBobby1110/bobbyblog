
import React from 'react'
import PageCard from './pagecard'
import { title } from 'process'
import styles from './pricing.module.css'



const Pricing = () => {

  
  
  
  const price = ['12,000', '60,000']
  return (
    <div className={styles.main}>
      <h2>Learn full stack web and App development online with Free Help to Certification from Free Code Camp 🔥🔥</h2>
   <div className={styles.bold}>
   <PageCard title='Monthly Plan' pricings={price[0]} date='Month' discount='' q={price[0]}/>
     <PageCard title='Yearly Plan' pricings={price[1]} date='Year' discount='50% discount'  q={price[1]}/>
    
   </div>
    </div>
  )}



export default Pricing