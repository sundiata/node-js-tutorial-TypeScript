import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: any;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    
    res.status(401).json({ message: "Access denied. No token provided." });
    return; 
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded; 
    next(); 
  } catch (error) {
   
    res.status(400).json({ message: "Invalid token." });
    return; 
  }
};
