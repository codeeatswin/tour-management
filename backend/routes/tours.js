import express from 'express';
import { createTour } from './../controllers/tourController.js';

const router = express.Router();

// create new tour - 라우터 설정후 index.js에 등록

router.post('/', createTour);

export default router;
