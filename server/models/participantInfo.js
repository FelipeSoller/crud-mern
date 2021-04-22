import mongoose from 'mongoose';

const participantSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    participation: Number,
});

const ParticipantInfo = mongoose.model('ParticipantInfo', participantSchema);

export default ParticipantInfo;