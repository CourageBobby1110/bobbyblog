const mongoose = require('mongoose');
const express = require('express')

const app = express();

export const connectdb = async () => {
  try {
    const uri = process.env.mdb
    await mongoose.connect(uri) 
       

  }
  catch (error) {
    console.log('error connecting to your mongodb database', error);
    process.exit(1)
  }

    

}
