import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { createParticipant } from '../../actions/participants';

import useStyles from './styles.js';

const Form = () => {
    const [participantData, setParticipantData] = useState({
        firstName: '',
        lastName: '',
        participation: '',
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(createParticipant(participantData));
        clear();
    }

    const clear = () => {
        setParticipantData({
            firstName: '',
            lastName: '',
            participation: '',
        })
    }

    const classes = useStyles();
    
    return (
      <div className={classes.header}>
        <form className={classes.inputContainer} autocomplete="off" noValidate onSubmit={handleSubmit}>            
            <input
                className={classes.input}
                name="firstName" 
                label="FirstName" 
                placeholder="Nome"
                value={participantData.firstName}
                onChange={(e) => setParticipantData({ ...participantData, firstName: e.target.value })}
            />
            <input
                className={classes.input}
                name="lastName" 
                label="LastName" 
                placeholder="Sobrenome"
                value={participantData.lastName}
                onChange={(e) => setParticipantData({ ...participantData, lastName: e.target.value })}
            />
            <input
                className={classes.input}
                name="participation" 
                label="Participation" 
                placeholder="Participação"
                value={participantData.participation}
                onChange={(e) => setParticipantData({ ...participantData, participation: e.target.value })}
            />
                     
            <button className={classes.button} type="submit">ENVIAR</button>
        </form>
      </div>
    );
}

export default Form;