import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'
import apiRouter from './apiRouter.js';
import dotenv from 'dotenv';
dotenv.config();
import {mongoConnSetup} from './services/db_con/mongoConnSetup.js';
import rateLimit from 'express-rate-limit';

const limiter  = rateLimit({
    windowMs: 60 * 5000, // 5 minutes
    max: 100, // Can be changed to any number. Notice: Our API key has a limit. 
    standardHeaders: 'draft-7',
    legacyHeaders: false
});

const app = express();
app.use(limiter);
app.use(express.json());
app.use(apiRouter);


const __filenameNew = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filenameNew)

mongoConnSetup();

app.get('/', (req, res) => {
    res.sendFile("./public/index.html", {root: path.join(__dirname)})
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server started on port 3000');
});

export default app;

