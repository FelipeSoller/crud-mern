import axios from 'axios';

const url = 'http://localhost:5000/participants';

export const fetchParticipants = () => axios.get(url);
export const createParticipant = (newParticipant) => axios.post(url, newParticipant);
export const deleteParticipant = (id) => axios.delete(`${url}/${id}`);