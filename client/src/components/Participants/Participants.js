import React from 'react';

import Participant from './Participant/Participant';
import Chart from './Chart/Chart';

import useStyles from './styles.js';

const Participants = () => {
    const classes = useStyles();

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