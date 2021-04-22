import React from 'react';

import useStyles from './styles.js';

const Form = () => {
    const classes = useStyles();

    return (
      <div className={classes.header}>
        <form>            
            <input
                className={classes.input}
                type="text"
                placeholder="Nome"        
            />
            <input
                className={classes.input}
                type="text"
                placeholder="Sobrenome"        
            />
            <input
                className={classes.input}
                type="number"
                placeholder="Participação"            
            />           
            <button className={classes.button} type="submit">ENVIAR</button>
        </form>
      </div>
    );
}

export default Form;