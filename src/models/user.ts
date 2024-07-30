
import { timeStamp } from "console";
import mongoose from "mongoose";
interface user{
    id : string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    _id: string;
    courses : [string];
}

const userSchema = new mongoose.Schema<user>({
    _id: {type: 'string', required: true},
    firstName: {type: String },
    lastName: {type: String, },
    email:{type: String, required: true, unique: true},
    image: {type: String,},
    courses : {type: [], },
    role: {
        type: String,
        enum: ['user', 'admin', 'Tutor'], // Adjust roles as needed
        default: 'user',
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
  
     

      
},
{ timestamps: true,  // Enables createdAt and updatedAt fields
  strict: false, // Disable strict mode to allow extra fields in the document

 }
  


)

export const User = mongoose.models.User  ||  mongoose.model<user>('User', userSchema);
