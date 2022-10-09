import {Router} from "express";
import bodyParser from "body-parser"
import {getCourses,getCoursesByID,addCourse,deleteCourse, updateCourseDates} from "./controller";
const router =  Router();
const jsonParser = bodyParser.json()
router.get('/',getCourses);
router.post('/',jsonParser,addCourse);
router.get('/:id',getCoursesByID);
router.delete('/:id',deleteCourse);
router.put('/:id',jsonParser,updateCourseDates);

export default router;