import ParticipantInfo from '../models/participantInfo.js';

export const getParticipants = async (req, res) => {
    try {
        const participantsInfo = await ParticipantInfo.find();

        res.status(200).json(participantsInfo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createParticipant = async (req, res) => {
    const participant = req.body;
    
    const newParticipant = new ParticipantInfo(participant);

    try {
        await newParticipant.save();

        res.status(201).json(newParticipant)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}