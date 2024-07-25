import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Payload } from "../Models/authModel";

dotenv.config();

export interface ExtendedRequest extends Request {
    info?: Payload;
}

export function verifyToken(req: ExtendedRequest, res: Response, next: NextFunction) {
    try {
        const token = req.headers['token'] as string; 

        if (!token) {
            return res.status(401).json({ message: 'Forbidden !!' });
        }

        const decodedToken = jwt.verify(token, process.env.SECRET as string) as Payload;

        if (decodedToken.Role !== 'admin') {
            return res.status(403).json({ message: 'Access denied. Admins only.' });
        }

    
        req.info = decodedToken;

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    next();
}

export function verifyCitizenToken(req: ExtendedRequest, res: Response, next: NextFunction) {
    try {
        const token = req.headers['token'] as string; 

        if (!token) {
            return res.status(401).json({ message: 'Forbidden !!' });
        }

        const decodedToken = jwt.verify(token, process.env.SECRET as string) as Payload;

        if (decodedToken.Role !== 'citizen') {
            return res.status(403).json({ message: 'Access denied.' });
        }

    
        req.info = decodedToken;

        next();
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export function verifyGvnToken(req: ExtendedRequest, res: Response, next: NextFunction) {
    try {
        const token = req.headers['token'] as string; 

        if (!token) {
            return res.status(401).json({ message: 'Forbidden !!' });
        }

        const decodedToken = jwt.verify(token, process.env.SECRET as string) as Payload;

        if (decodedToken.Role !== 'gvn') {
            return res.status(403).json({ message: 'Access denied. Governmnet Officials only.' });
        }

    
        req.info = decodedToken;

    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
    next();
}