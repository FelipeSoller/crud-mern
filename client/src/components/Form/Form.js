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

        if (
            participantData.firstName === '' || 
            participantData.lastName === '' || 
            participantData.participation === ''
        ) {
            alert('Preencha todos os campos');
            return
      
          } else if (
              participantData.firstName.length > 12 || 
              participantData.lastName.length > 12
            ) {
            alert('Tamanho máximo para Nome ou Sobrenome são de 12 caracteres');
            return
      
          } else if (
              participantData.participation > 100
            ) {
            alert('Valor máximo de participação é 100%');
            return      
          }
        
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
                     
            <button 
                className={classes.button} 
                type="submit"
                // disabled={
                //     participantData.firstName.length === 0 ||
                //     participantData.lastName.length === 0 ||
                //     participantData.participation == 0 ||
                //     participantData.participation > 100 
                //   }
            >ENVIAR</button>
        </form>
      </div>
    );
}

export default Form;