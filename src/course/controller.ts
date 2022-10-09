import { Request,Response } from "express";
import queries from "./queries"
import pool from "../db";

const getCourses = (req: Request,res: Response) => {
    try{
        pool.query(queries.getCourses,(error,results)=> {
            if(error) throw error;
            if(!results.rows.length)
                res.send("No courses found");
            res.status(200).json(results.rows);
        });
    }
    catch(error)
    {
        console.log(error);
    }
    
};

const getCoursesByID = (req: Request,res: Response) => {
    const id: number = parseInt(req.params.id);
    try{
        pool.query(queries.getCourseByID,[id],(error,results)=> {
            if(error) throw error;
            if(!results.rows.length)
                res.send("No course found");
            res.status(200).json(results.rows);
        });  
    }
    catch(myerror)
    {
        console.log(myerror);
    }
};

const addCourse = (req: Request,res: Response) => {
    const {name, description, start_date,end_date} = req.body;//no verification yet
    try{
        pool.query(queries.checkNameExists,[name],(error,results)=> {
            if(error) throw error;
            if(results.rows.length)
                res.send("Course name already exists.");
            else
                try{
                    pool.query(queries.addCourse,[name, description, start_date,end_date],(error,results)=> {
                        if(error) throw error;
                        res.status(201).send("Course added successfully!")
                    });
                }
                catch(myerror)
                {
                    console.log(myerror);
                }
        }); 
    }
    catch(myerror)
    {
        console.log(myerror);
    }
};

const deleteCourse = (req: Request,res: Response) => {
    const id: number = parseInt(req.params.id);
    try{
        pool.query(queries.getCourseByID,[id],(error,results)=> {
            if(error) throw error;
            if(!results.rows.length)
                res.send("Course does not exists in database");
            else
                try{
                    pool.query(queries.deleteCourse,[id],(error,results)=> {
                        if(error) throw error;
                        res.status(200).send("Course deleted successfully!");
                    });
                }
                catch(myerror)
                {
                    console.log(myerror);
                }
        });
    }
    catch(myerror)
    {
        console.log(myerror);
    }
};

const updateCourseDates = (req: Request,res: Response) => {
    const id: number = parseInt(req.params.id);
    const {start_date,end_date} = req.body;  //no verification yet
    console.log(start_date);
    try{
        pool.query(queries.getCourseByID,[id],(error,results)=> {
            if(error) throw error;
            if(!results.rows.length)
                res.send("Course does not exists in database");
            else
                try{
                    pool.query(queries.updateCourseDates,[start_date,end_date, id],(error,results)=> {
                        if(error) throw error;
                        res.status(200).send("Course's dates updated successfully!");
                    });
                }
                catch(myerror)
                {
                    console.log(myerror);
                }
        }); 
    }
    catch(myerror)
    {
        console.log(myerror);
    }
};

export {
    getCourses,
    getCoursesByID,
    addCourse,
    deleteCourse,
    updateCourseDates
};