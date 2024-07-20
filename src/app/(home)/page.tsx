import Image from "next/image";
import styles from './page.module.css'
import { Send, SendHorizontal } from "lucide-react";
import Trending from "@/components/trending";
import { getPosts } from "@/lib/getPosts";
import DailyNews from '../../components/dailynews';
import Toparticles from "@/components/toparticles";
import Footer from "@/components/footer";

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

  const recentdata = data.filter(f => {
    return f.categories.includes('recent')
  } )

  const trendingdata = data.filter(t => {
    return t.categories.includes('trending')
  })
  // console.log(filtereddata)
 
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
      

      
         <Trending posts={trendingdata}/>
         <DailyNews posts={data} />
         <Toparticles posts={data}/>
         <Footer/>
      
     
    </main>
  );
}
