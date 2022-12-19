import express from 'express';
const router = express.Router();
import { test, root } from '../controllers/Views';

router.get('/', root);

router.get('/test', test)

export { router }