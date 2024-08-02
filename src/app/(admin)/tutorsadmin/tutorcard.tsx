import { atlas } from '@/lib/getp'
import Link from 'next/link'
import styles from './tutoradmin.module.css'
type queryTypes = {
  query: string,
  z: number

}


const Tutorcard = async ({query, z}: queryTypes) => {
  const data = await  atlas(query, z)

  return (
    <div className={styles.board}>
    



     <div className={styles.raven}>
     {
        data.filtereddata.map((data:any) => (<div key={data._id} className={styles.boardx}>
          <Link href={`/tutorsadmin/${data._id}`} className={styles.link}>
      
            
            <p>{data.email}</p>
            <p>{data.firstName}</p>
         
          </Link>

        </div>))
        
      }
     </div>




    </div>
  )
}

export default Tutorcard