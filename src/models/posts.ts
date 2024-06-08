import mongoose from 'mongoose'

interface posts{
    title: string,
    body: string,
  
    author:string,
    image:string[],
    tags: string[],
    categories: string[],
    createdAt : Date,
    updatedAt : Date,
}



const postSchema = new mongoose.Schema<posts>({
    title: {type: String, required: true},
    body: {type: String, required: true},
   
    author: {type: String, required: true},
    image: {type: [],},
    categories: {type: [], required: true},
    tags: {type: []},
    

   
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },



})
export const posts = mongoose.models.Posts  ||  mongoose.model<posts>('Posts', postSchema);