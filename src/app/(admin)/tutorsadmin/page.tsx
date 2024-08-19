import Link from 'next/link';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Search from "./search";
import Tutorcard from "./tutorcard";
import styles from './tutoradmin.module.css';
import { atlas } from '@/lib/getp';

//  const getProducts = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getproduct/`, {
//       cache: 'no-store',
//     });
//     return res.json();
//   } catch (error) {
//     console.error("Failed to fetch products:", error);
//   }
// };

const TutorAdmin = async ({ searchParams }: { searchParams?: { query?: string; page?: any; } }) => {
  console.log(searchParams?.page);
  let page = parseInt(searchParams?.page, 10);
  page = !page || page < 1 ? 1 : page;
  const query = searchParams?.query || '';
  const data = await  atlas(query, page)
 
  const totalPages = Math.ceil(data.x / 3);
 
  
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPrev = page + 1;
  const pageNumbers = [];
  const OffsetNumber = 3;
  for(let i =page - OffsetNumber; i <= page + OffsetNumber; i++) {
    if(i >= 1 && i <= totalPages){
       pageNumbers.push(i);
    }
  }
 

 
  interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
  }

  const { getUser } = getKindeServerSession();
  const p = await getUser();
  console.log(p?.given_name as string);
 
 
 
  console.log(data.x)

  return (
    <main >
      <div  className={styles.main}>
      <div>  <Search placeholder="search products" /></div>
        <Tutorcard query={query} z={page} />

        <div className={styles.page}>
           <div className={styles.pagex}>
          
        {page === 1 ? (
          <div className={`"opacity-60" `} aria-disabled ="true">Previous</div>
        ) : (
         <div className={styles.prev}> <Link href={`?page=${prevPage}`} >Previous</Link></div>
        )}

        {/* page Number */}

        {
          pageNumbers.map((number) => (
            <Link key={number} className={styles.pageNumber} href={ `?page=${number}` }>
              {number}
            </Link>
          ))}





        




        {
          page === totalPages? (
            <div className={`"opacity-60" `} aria-disabled ="true">Next </div>
          ) : (
            <div className={styles.next}> <Link href={`?page=${nextPrev}`} >Next</Link></div>
          )
        }

           </div>

        </div>
      

       
      </div>
    </main>
  );
};

export default TutorAdmin;












































































































// import Link from 'next/link';



// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


// import Search from "./search";
// import Tutorcard from "./tutorcard";


// // export const  getlivedata= async() => {
// //   try{
// //     const client = await connectToDatatbase();
// //     const db = client.db("Node-Api");
// //     const items = await db.collection("products").find({}).toArray();
// //     const response = {items}
// //     return response
// //   }
// //   catch(error){
// // throw new Error("failed to fetch data. pls try again later")
// //   }
// // }


//     // try {
//     //   const res = await fetch(` ${process.env.NEXT_PUBLIC_BASE_URL}/api/getproduct`, {
//     //     cache: 'no-store',
        
//     //   });
//     //   return res.json();
      
//     // } catch (error) {
      
//     // }
   
  

// // async function getData(){
// //   try{
// //     const client = await connectToDatatbase();
// //     const db = client.db("Node-Api")

// //   }
// //   catch{

// //   }
// // }


// export const  getProducts = async() => {

//   try {
//     const res = await fetch(` ${process.env.NEXT_PUBLIC_BASE_URL}/api/getproduct/`, {
//       cache: 'no-store',
     
//     });
//     return res.json();
    
//   } catch (error) {
    
//   }
 
// }










// export default  async function TutorAdmin({searchParams}: {searchParams?:{
//   query?:string;
//   page?: any;
//   // per_page : number;
// }}) {
//     console.log(searchParams?.page)
//     let page = parseInt(searchParams?.page, 10)
//     page = !page || page < 1 ? 1 : page
//     const prevPage = page -1 > 0 ? page - 1 : 1
//     const nextPrev = page + 1
   
//   //   const page = searchParams?.page ?? '1'
//   //   const per_page = searchParams?.per_page ?? '3'
//   //   const start = (Number(page)- 1) * Number(per_page)
//   //   const end = start + Number(per_page)
//   //   const data = await getlivedata()
//   // //  console.log(data)
    
//   const query = searchParams?.query || ''
//   interface product{
//     _id: string;
//     name: string;
//     description: string;
//     price: number;
    

//   }
//   const {getUser} =  getKindeServerSession();
//   const p = await getUser();
//   console.log(p?.given_name as string )


//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div>
//         <Search placeholder="search products" />
       
    
//         {
//          <Tutorcard query={query}  z = {page}/>
//         }
       
//         {
//           page ===1 ?(<div className="opacity-60">Previous</div>):(<Link  href={`?page=${prevPage}`}  >Previous</Link>)

        
          
//         }
       
        
        
//       </div>
      
//     </main>
//   );















// }