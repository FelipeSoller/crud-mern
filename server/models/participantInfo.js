import mongoose from 'mongoose';

const participantSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    participation: Number,
});

const ParticipantInfo = mongoose.model('ParticipantInfo', participantSchema);

export default ParticipantInfo;