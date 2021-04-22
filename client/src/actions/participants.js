import * as api from '../api';

export const getParticipants = () => async (dispatch) => {

    try {
        const { data } = await api.fetchParticipants();

        dispatch({ type: 'FETCH_ALL', playload: data });
    } catch (error) {
        console.log(error.message);
    }


}