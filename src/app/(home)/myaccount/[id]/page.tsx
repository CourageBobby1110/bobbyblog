
import { cache } from 'react';
import styles from '../myaccount.module.css'
import Params from '../params';
import Link from 'next/link';
import Image from 'next/image';



interface Inputs{
   
  id: string | undefined ;
 
 
  ispaid: string;
 
}



const getUserById = async (id: string) =>{
    try {
        const res = await fetch(`http://localhost:3000/api/user/${id}`, 
          {
            cache: 'no-store'
          }
        )
        return res.json()
        
    } catch (error) {
        console.log(error);
        
    }


}

 async  function UpdatedPay( {id, ispaid}: Inputs ){
  if (!id) {
      console.error('ID is undefined');
      return;
  }

  try {
      const Xres = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           ispaid: ispaid
          })
      })

      const {user} = await  Xres.json();

      if(user){
        console.log('user already exists')
        return;
      }
      
      
     } catch (error) {
      console.log(error);
     }
}






interface PageProps{
    params:{
      id: string
     
    },
   searchParams:{
    query: string
   }
   }

   


const Payment = async({searchParams, params}: PageProps

) =>{
 console.log(searchParams);
 const {id} = params;
  await UpdatedPay({id: id, ispaid: 'false'}  )

       console.log(id);
    const z = await getUserById((id)) 
    console.log(z);
  

  

   
    
     
  return(
    <div className=''>
      <div className={styles.main}>
       <div className={styles.header}>
       <h1>{`Hi ${z.email}, 👋🏾`}</h1>
       <h2>Bank transfer </h2>
       <p>You will pay: N{searchParams.query}</p>
       </div>
        <div className={styles.content}>
          <div className={styles.payment}>
            <div className={styles.Imagewrapper}>
              <Image alt='poppins flower' src='/poppyflower.svg' fill className={styles.image}></Image>
            </div>
          <p>Bank Name: Access Bank</p>
          <p>Account Number: 1240839827</p>
          <p>Account name: Courage Chidi Bobby</p>
          </div>
          <div className={styles.info}>
          <div>
            <p>Note: Once payment has been made and confirmed, 
             </p>
           <p>  forward your reciept to this number on whatsapp: 09038583744</p>
           <p> or click on the whatsapp link to forward your reciept: </p>
          
          </div>
          <div>
           
            <p> any issues with payment: <Link href='/contacts'>Contact Us</Link> </p>
          </div>
          <div>
            disclaimer: This platform is for educational purposes only .
            <p>Debit card payment will be available soon</p>
          </div>
          </div>
          
        </div>
        <div className={styles.btn}>
            {
              z.ispaid ==='false'? <button disabled= {true}>awaiting payment....</button>: <button><Link href=''>Go To your dashboard</Link></button>
            }
          </div>
        

      </div>
        
    </div>
  )


}

export default Payment;


