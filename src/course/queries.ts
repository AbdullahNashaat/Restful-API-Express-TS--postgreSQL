const getCourses: string ="SELECT * FROM courses;";
const getCourseByID: string ="SELECT * FROM courses WHERE ID = $1;";
const checkNameExists: string ="SELECT * FROM courses WHERE name = $1;";
const addCourse: string ="INSERT INTO courses (name, description, start_date, end_date) VALUES($1, $2, $3, $4);";
const deleteCourse: string ="DELETE FROM courses WHERE ID = $1;";
const updateCourseDates: string ="UPDATE courses SET start_date = $1, end_date = $2 WHERE ID = $3;";

export default {
    getCourses,
    getCourseByID,
    checkNameExists,
    addCourse,
    deleteCourse,
    updateCourseDates
};