import { atlas } from '@/lib/getp'
import Link from 'next/link'
type queryTypes = {
  query: string,
  z: number

}


const Tutorcard = async ({query, z}: queryTypes) => {
  const data = await  atlas(query, z)

  return (
    <div>
      <p>{data.x}</p>
      {
        data.filtereddata.map((data:any) => (<div key={data._id}>
          <Link href={`/product/${data._id}`}>
          <div>
            
            <p>{data.email}</p>
            <p>{data.firstName}</p>
          </div>
          </Link>

        </div>))
        
      }




    </div>
  )
}

export default Tutorcard