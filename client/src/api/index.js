import axios from 'axios';

const url = 'http://localhost:5000/participants';

export const fetchParticipants = () => axios.get(url);