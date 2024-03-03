import User from "../models/user.module.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
   const { username, email, password } = req.body;

   if (!username || !email || !password || username === '' || email === '' || password === '') {
      next(errorHandler(400, "All fields are required"))
   }


   const hashpass = bcryptjs.hashSync(password, 10);

   const newUser = new User({ 
      username,
      email, 
      password: hashpass,
   });


      try{
         await newUser.save();
      res.json("User created successfully");
      } catch (err) {
         next(err)
      }
      
};