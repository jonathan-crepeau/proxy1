// SERVE 
import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
const PORT = process.env.PORT;

const Fastify = require('fastify');
const server = Fastify();

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

server.register(require('@fastify/http-proxy'), {
    upstream: 'http://my-api.example.com',
    prefix: '/token',
    undici: true,
    replyOptions: {
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${SECRET}`
    }
})

server.listen({ port: 3000 });


// SECTION - Server Start
app.listen(PORT, () => console.log(`App listening on ${PORT}..`));