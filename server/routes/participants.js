import express from 'express';

import { getParticipants, createParticipant } from '../controllers/participants.js';

const router = express.Router();

router.get('/', getParticipants);
router.post('/', createParticipant);

export default router;