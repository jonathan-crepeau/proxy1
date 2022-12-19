import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('<h2>The Northern Water Tribe Homepage</h2>');
});

app.listen(PORT, () => console.log(`App listening on ${PORT}..`));