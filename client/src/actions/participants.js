import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

export const getParticipants = () => async (dispatch) => {

    try {
        const { data } = await api.fetchParticipants();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createParticipant = (participant) => async (dispatch) => {
    try {
        const { data } = await api.createParticipant(participant);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const deleteParticipant = (id) => async (dispatch) => {
    try {
        await api.deleteParticipant(id);

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);        
    }
}