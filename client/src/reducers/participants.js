/* eslint-disable import/no-anonymous-default-export */
export default (participants = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.playload;

        case 'CREATE':
            return participants; 

        default:
            return participants; 
    }
}