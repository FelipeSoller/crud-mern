/* eslint-disable import/no-anonymous-default-export */
export default (participants = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...participants, action.payload];

        default:
            return participants; 
    }
}