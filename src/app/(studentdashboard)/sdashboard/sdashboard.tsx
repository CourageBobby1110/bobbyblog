import Link from 'next/link';
import React from 'react'
import styles from '../../(tdashboard)/dashboard/tdashboard.module.css'



interface PageProps{
    params : {
      id: string;
    }
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

const Sdashboard = async ({params: {id}}: PageProps) => {
    const user = await getUserById(id)
  return (
    <div className={styles.new}>
    <div>
     <h1>Welcome To your Dashboard</h1>
     <p>you have {user.tutor.length} Tutors</p>
 

    </div>

  <Link href={`/yourtutors/${id}`}>

  <div >
     
     <h1>Your Tutors</h1>
     <p>Here you will see your Tutors and the time you are to go for your class.</p>
    </div>
  </Link>

  

  

    <div>

    </div>

  




</div>
  )
}

export default Sdashboard