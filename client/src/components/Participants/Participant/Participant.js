import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { deleteParticipant } from '../../../actions/participants';

import useStyles from './styles.js';

const Participant = () => {
    const participants = useSelector((state) => state.participants)

    const classes = useStyles();

    const dispatch = useDispatch();

    return (
        <div className={classes.tableContainer}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}>Nº</th>
                        <th className={classes.th}>Nome</th>
                        <th className={classes.th}>Sobrenome</th>
                        <th className={classes.th}>Participação</th>
                        <th className={classes.th}>Ação</th>
                    </tr>
                </thead> 
                {participants.map((participant, index) => (
                        <tr>                    
                            <th className={classes.th}>{index + 1}</th>
                                <td className={classes.td}>{participant.firstName}</td>
                                <td className={classes.td}>{participant.lastName}</td>
                                <td className={classes.td}>{participant.participation} %</td>
                            <td className={classes.td} >
                            <div >
                                <button className={classes.button} onClick={() => dispatch(deleteParticipant(participant._id))}>Deletar
                                </button>
                            </div>
                        </td>
                    </tr>    
                ))}                    
            </table>
        </div>
    );
}

export default Participant;
