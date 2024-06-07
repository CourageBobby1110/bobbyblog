import { connectdb } from "@/database/db";
import { posts } from "@/models/posts";
import { NextRequest, NextResponse } from "next/server";

const data = connectdb()

export  const POST = async (request : NextRequest) =>{
    const {title,body,author, image, tags, categories } = await request.json()
     await data

    const existingPosts = await posts.findOne({title})
    if(existingPosts){
        const err = "posts already exist"
        return new NextResponse(err, {status: 400});

    }
        
        const newPosts = new posts(
            {
                title,
                body,
                author,
                image,
                tags,
                categories
              
              
            }
        )
    try{
        await newPosts.save();
        return new NextResponse(newPosts, {status: 200},)
        

    } catch(err){
       NextResponse.json(err)
    }

    };

   

export  const GET = async (res: NextResponse, req: NextRequest, page: number ) =>{
      await data
    try{
        
        const products = await posts.find({})
       
       
       

      return NextResponse.json(products)
      

       
        
        

    } catch(err){
        return NextResponse.json({'product not found': err});
        
       
    }

    };