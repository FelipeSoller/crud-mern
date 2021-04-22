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
        <>
            <div className={classes.titleContainer}>
                <h2 className={classes.title}>DATA</h2>
                <p className={classes.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={classes.tablesContainer}>
                <Participant />
                <Chart />
            </div>
        </>
    );
}

export default Participants;