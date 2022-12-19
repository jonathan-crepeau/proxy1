import express from 'express';
const router = express.Router();
import { root } from '../controllers/Token';

router.get('/', root);

export { router }