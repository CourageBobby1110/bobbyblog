import Image from "next/image";
import styles from './page.module.css'
import { Send, SendHorizontal } from "lucide-react";
import Trending from "@/components/trending";
import { getPosts } from "@/lib/getPosts";

interface posts{
  title: string;
  body: string;
  date: string;
  author: string;
  image: string;
  categories: string[];

}

export default async function  Home () {
  const data = await getPosts() as posts[]
 
// const bionic =   data.map(p =>{
//     return {
//       title: p.title,
//       body: p.body,
//       author: p.author,
//       image: p.image,
//       categories: p.categories,

//     }
//    })
  
// const {title, body, author, image, date} =  data[0]
// console.log(title)
// const   {title, body, author, image, date} = await getPosts() as posts



  return (
    <main >
      <div className={`${styles.herocontainer} flex justify-between items-center px-5`}>
      <div className={`${styles.hero}`}>

      <h1>Made For Great Minds...</h1>
      <p>Explore my world and see contents that will inspire, educate and improve your life from health to tech, etc.</p>
      <div>
        <button className={`${styles.btn}`}>Explore <SendHorizontal /></button>
      </div>

      </div>

      <div>
        <Image src='/Broken light bulb-pana.svg' alt="the globe"  width={500} height={500}></Image>

      </div>

      
      

      
      </div>

      
         <Trending posts={data}/>
      
     
    </main>
  );
}
