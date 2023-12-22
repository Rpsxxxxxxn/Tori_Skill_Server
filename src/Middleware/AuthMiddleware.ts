import { NextFunction, Request, Response } from "express";
import admin from '../FirebaseAdmin';

const middleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Tokenがありません');
  }
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    (req as any).user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).send('Tokenが無効です');
  }
}

module.exports = middleware;