import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

/* eslint-disable import/no-anonymous-default-export */
export default (participants = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...participants, action.payload];

        case DELETE:
            return participants.filter((participant) => participant._id !== action.payload);

        default:
            return participants; 
    }
}