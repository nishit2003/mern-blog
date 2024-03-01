import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
mongoose.connect(process.env.MONGO)
.then( () => {
      console.log('Connected to database!');
   })
   .catch( () => {
      console.log('Connection failed!')});

app.listen(3000, () => {
   console.log('Server is running on port 3000!!');
});