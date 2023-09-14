import express from 'express';
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from '../controllers/userController.js';
const router = express.Router();
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

//update Tour
router.put('/:id', verifyUser, updateUser);

//delete Tour
router.delete('/:id', verifyUser, deleteUser);

//get Single Tour
router.get('/:id', verifyUser, getSingleUser);

//get All Tour
router.get('/', verifyAdmin, getAllUser);

export default router;
