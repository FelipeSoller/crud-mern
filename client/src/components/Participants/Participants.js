import React from 'react';
import { useSelector } from 'react-redux';

import Participant from './Participant/Participant';
import Chart from './Chart/Chart';

import useStyles from './styles.js';

const Participants = () => {
    const participants = useSelector((state) => state.participants)
    const classes = useStyles();

    console.log(participants);

    return (
        !participants.length ? (
            <div className={classes.titleContainer}>
                <h2 className={classes.title}>NO DATA</h2>
                <p className={classes.subTitle}>Não há nenhuma tabela a ser exibida.</p>
            </div> 
        ) : (
            <>
                <div className={classes.titleContainer}>
                    <h2 className={classes.title}>DATA</h2>
                    <p className={classes.subTitle}>Visualize abaixo a tabela contendo os dados solicitados.</p>
                </div>
                <div className={classes.tablesContainer}> 
                    <div className={classes.participants}>
                        <Participant />                       
                    </div>  
                    <div className={classes.chart}>
                        <Chart />
                    </div>               
                </div>
            </>
        )        
    );
}

export default Participants;