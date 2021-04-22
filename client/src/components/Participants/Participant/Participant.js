import React from 'react';

import useStyles from './styles.js';

const Participant = () => {
    const classes = useStyles();

    return (
        <div className={classes.tableContainer}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th className={classes.th}></th>
                        <th className={classes.th}>Nome</th>
                        <th className={classes.th}>Sobrenome</th>
                        <th className={classes.th}>Participação</th>
                        <th className={classes.th}>Ação</th>
                    </tr>
                </thead>
                {/* <tbody>
                <tr>
                    <td class="no-data" colspan="100%"> There's no data to show</td>
                </tr>
                </tbody> */}
                <tr>
                    <th className={classes.th}></th>
                        <td className={classes.td}>participant.firstName</td>
                        <td className={classes.td}>participant.lastName</td>
                        <td className={classes.td}>participant.participation %</td>
                    <td className={classes.td} >
                    <div >
                        <button className={classes.button}>Deletar
                        </button>
                    </div>
                    </td>
                </tr>

                <tr>
                    <th className={classes.th}></th>
                        <td className={classes.td}>participant.firstName</td>
                        <td className={classes.td}>participant.lastName</td>
                        <td className={classes.td}>participant.participation %</td>
                    <td className={classes.td} >
                    <div>
                        <button className={classes.button}>Deletar
                        </button>
                    </div>
                    </td>
                </tr>

                <tr>
                    <th className={classes.th}></th>
                        <td className={classes.td}>participant.firstName</td>
                        <td className={classes.td}>participant.lastName</td>
                        <td className={classes.td}>participant.participation %</td>
                    <td className={classes.td} >
                    <div>
                        <button className={classes.button}>Deletar
                        </button>
                    </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Participant;