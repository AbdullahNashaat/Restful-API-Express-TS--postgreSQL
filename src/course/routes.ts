import {Router} from "express";
import bodyParser from "body-parser"
import {getCourses,getCoursesByID,addCourse,deleteCourse} from "./controller";
const router =  Router();
const jsonParser = bodyParser.json()
router.get('/',getCourses);
router.post('/',jsonParser,addCourse);
router.get('/:id',getCoursesByID);
router.delete('/:id',deleteCourse);

export default router;