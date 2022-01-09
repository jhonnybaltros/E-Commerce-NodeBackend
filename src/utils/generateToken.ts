import jwt from  'jsonwebtoken';
import dotenv from  'dotenv';

dotenv.config()

const JWT = process.env.JWT_SECRET || ''

const generateToken = (id: string) => {
  return jwt.sign({ id }, JWT, {
    expiresIn: '30d'
  });
}

export default generateToken;