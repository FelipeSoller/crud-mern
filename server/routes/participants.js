import express from 'express';

import { getParticipants, createParticipant, deleteParticipant } from '../controllers/participants.js';

const router = express.Router();

router.get('/', getParticipants);
router.post('/', createParticipant);
router.delete('/:id', deleteParticipant);

export default router;