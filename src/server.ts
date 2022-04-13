import express from 'express';
import coursesRouter from "./course/routes";
const app = express();

app.use('/courses',coursesRouter);
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello11');
});
//postgres port 5432
app.listen(5000,()=>console.log('running'));