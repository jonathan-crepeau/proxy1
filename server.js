import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const PORT = process.env.PORT;
import { router as viewsRouter } from './routes/views';

// Serve Static
app.use(express.static('public'));


// SECTION - Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// View Routes
app.use('/', viewsRouter);


// SECTION - Server Start
app.listen(PORT, () => console.log(`App listening on ${PORT}..`));