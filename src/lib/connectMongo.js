import { MongoClient} from "mongodb";

const MONGO_DB_URI  = process.env.MONGO_DB_URL;
let client = null

export  async function connectToDatatbase(){
    if(client){
        return client
    }
    if(!MONGO_DB_URI){
        console.log("Mongo db not found")
    }
    try{
        client = await MongoClient.connect(MONGO_DB_URI)
        console.log("connected to mogodb")
        return client
    }
    catch(error){
        console.error("error connecting the database", error)
     
    }
}