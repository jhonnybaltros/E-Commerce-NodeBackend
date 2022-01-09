import { NextFunction, Request, RequestHandler, RequestParamHandler, response, Response } from 'express';
import AsyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModels';
import dotenv from 'dotenv';

dotenv.config();

const JWT = process.env.JWT_SECRET || ''

const protect = AsyncHandler(async(req: any, res: Response, next: NextFunction) => {
  
    let token = null

  if(
    req.headers.authorization && 
    req.headers.authorization?.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1]
      
      const decoded: any = jwt.verify(token, JWT);

      req.user = await User.findById(decoded.id).select('-password')
      console.log(decoded)

      next()
    } catch (error) {
      console.error(error)
      res.status(401)
      throw new Error ('Not Authorized, no token')
    }
  } 

  if(!token) {
    res.status(401)
    throw new Error ('Not Authorized, no token')
  }
})

export { protect }