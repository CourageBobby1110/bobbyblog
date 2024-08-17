

import Trending from "@/components/trending";
import { getPosts } from "@/lib/getPosts";
import DailyNews from '../../components/dailynews';
import Toparticles from "@/components/toparticles";
import Footer from "@/components/footer";
import { addUser} from "./getUser";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

interface posts{
  _id: string;
  title: string;
  body: string;
  date: string;
  author: string;
  image: string;
  categories: string;

}

export default async function  Home () {
  await new Promise<void>((resolve, reject) => {
    setTimeout(resolve, 2000)
  })
  const {getUser } =  getKindeServerSession();
  const data = await getPosts() as posts[]

  const recentdata = data.filter(f => {
    return f.categories == 'Trending'
  } )

  const trendingdata = data.filter(t => {
    return t
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


const ctx = await getUser();
await addUser({ firstName: ctx?.given_name, lastName: ctx?.family_name, email: ctx?.email, image: ctx?.picture, _id: ctx?.id});

  


  return (
    <main >
      

      
         <Trending posts={trendingdata}/>
         <DailyNews posts={data} />
         <Toparticles posts={recentdata}/>
        
      
     
    </main>
  );
}


