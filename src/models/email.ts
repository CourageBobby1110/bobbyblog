import mongoose from "mongoose";

interface email {
    userId: string;
    mail: string;


}

const emailSchema = new mongoose.Schema<email>({
    userId: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
 }, { timestamps: true });


 export const email = mongoose.models.email  ||  mongoose.model<email>('email', emailSchema);
