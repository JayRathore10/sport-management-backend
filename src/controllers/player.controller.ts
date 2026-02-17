import { Request, Response, NextFunction} from 'express';

export const test = async(req : Request ,res : Response , next : NextFunction)=>{
  try{
    return res.status(200).json({
      message : "All Clear"
    })
  }catch(error) {
    next(error);
  }
}