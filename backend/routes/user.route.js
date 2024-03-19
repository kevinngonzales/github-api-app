import express from 'express';
import { getLikes, getUserProfileAndRepos, likeProfile } from '../controllers/user.controller.js';
import { ensureAuthenticated } from '../middleware/ensureAuthenticated.js';

const router = express.Router();

router.get('/profile/:username', getUserProfileAndRepos);

router.get('/likes', ensureAuthenticated, likeProfile);

router.get('/likes/:username', ensureAuthenticated, likeProfile);

export default router;