
import {connectdb} from '@/database/db'
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next/types";
import { posts } from "@/models/posts";


// const data = connectdb()

export async function GET(res:NextResponse, {params}: any, ){
  const data = connectdb()
     await data
   

    try {
        const {id} = params
     
        const product = await posts.findById(id );
      
            
        
        return NextResponse.json(product)
        
    } catch (error) {
         return  NextResponse.json("Product not found", {status: 404});
        
    }
}




export async function PUT (request: NextRequest, {params}: any){
  const data = connectdb()

    await data
    
    
    
  
    try {
        const { id } = params;
       const  {name, description, price} = await  request.json()
      
      
      


        const product = await  posts.findByIdAndUpdate(id, {
          name: name,
          description: description,
          price: price
          
      
        }
        
 
          
          
        );
        if (!product) {
          return NextResponse.json({ message: "Product not found" });
        }

        const updatedProduct = await posts.findById(id);
    
       return  NextResponse.json(updatedProduct);
      } catch (error) {
        NextResponse.json({ message: 'error', error: error});
      }

}


