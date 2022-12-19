// SERVE 
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
const PORT = process.env.PORT;

import { router as viewsRouter } from './routes/views';
import { router as tokenRouter } from './routes/token';

// Serve Static
app.use(express.static('public'));


// SECTION - Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// SECTION -  View Routes
app.use('/', viewsRouter);


// SECTION - Token Routes
app.use('/token', tokenRouter);


// SECTION Proxy Server
const CLIENT_ID = process.env.API_KEY;
const SECRET = process.env.API_SECRET;

// SECTION - Server Start
app.listen(PORT, () => console.log(`App listening on ${PORT}..`));