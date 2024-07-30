import {connectToDatatbase} from "./connectMongo";







export const  getP = async(perpage:number, page:number) => {
  try{
    const client = await connectToDatatbase();
    const db = client.db("Node-Api");
    const items = await db.collection("users").find({}).skip(perpage * (page - 1)).limit(perpage).toArray();
    const itemcount = await db.collection("users").countDocuments({});
    const response = {items, itemcount}
    return response
  }
  catch(error){
throw new Error("failed to fetch data. pls try again later")
  }


    // try {
    //   const res = await fetch(` ${process.env.NEXT_PUBLIC_BASE_URL}/api/getproduct`, {
    //     cache: 'no-store',
        
    //   });
    //   return res.json();
      
    // } catch (error) {
      
    // }
   
  }
  

  export async function atlas (query: string, p: any){
    // interface products {
    //     _id: string;
    //     name: string;
    //     description: string;
    //     price: number;

    // }

   const perpage = 3
  
    
   
    const data = await getP(perpage, p)  
    


    const filtereddata = data.items.filter((z: any) =>{
     return  z.email.toLowerCase().includes(query.toLowerCase())
    })
    const x = data.itemcount
    const totalpages = Math.ceil(data.itemcount/ perpage)
  
    
    return {filtereddata, x, totalpages}}
    
   

  

 


