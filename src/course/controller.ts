import { Request,Response } from "express";
import pool from "../db";
const getCourses = (req: Request,res: Response) => {
    pool.query("SELECT * FROM courses;",(error,results)=> {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
   
};
export {
    getCourses
};