import { Request,Response } from "express";
//import {getCoursesQuery,getCourseByIDQuery,checkNameExistsQuery,addCourseQuery,deleteCourseQuery} from "./queries"
import queries from "./queries"
import pool from "../db";
const getCourses = (req: Request,res: Response) => {
    pool.query(queries.getCourses,(error,results)=> {
        if(error) throw error;
        if(!results.rows.length)
            res.send("No courses found");
        res.status(200).json(results.rows);
    });
   
};
const getCoursesByID = (req: Request,res: Response) => {
    const id: number = parseInt(req.params.id);
    pool.query(queries.getCourseByID,[id],(error,results)=> {
        if(error) throw error;
        if(!results.rows.length)
            res.send("No course found");
        res.status(200).json(results.rows);
    });
   
};
const addCourse = (req: Request,res: Response) => {
    
    const {name, description, start_date,end_date} = req.body;
    pool.query(queries.checkNameExists,[name],(error,results)=> {
        if(error) throw error;
        if(results.rows.length)
            res.send("Course name already exists.");
        else
            pool.query(queries.addCourse,[name, description, start_date,end_date],(error,results)=> {
                if(error) throw error;
                res.status(201).send("Course added successfully!")
            });
    }); 
   
   
};
const deleteCourse = (req: Request,res: Response) => {
    const id: number = parseInt(req.params.id);
    pool.query(queries.getCourseByID,[id],(error,results)=> {
        if(error) throw error;
        if(!results.rows.length)
            res.send("Course does not exists in database");
        else
            pool.query(queries.deleteCourse,[id],(error,results)=> {
                if(error) throw error;
                res.status(200).send("Course deleted successfully!")
            });
    });
   
};
export {
    getCourses,
    getCoursesByID,
    addCourse,
    deleteCourse
};