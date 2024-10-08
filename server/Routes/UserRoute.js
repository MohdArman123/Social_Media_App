import express from 'express';
import {deleteUser, followUser, getUser, UnFollowUser, UpdateUser} from '../Controllers/UserController.js';

const router = express.Router();
 
router.get('/:id', getUser)
router.put('/:id', UpdateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser);

export default router;