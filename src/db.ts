import {Pool} from 'pg';

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "courses",
    password: "root",
    port: 5432,
});

export default pool;
