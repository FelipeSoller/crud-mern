import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        backgroundColor: '#00b8e2',
    }, 
    inputContainer: {
        width: '100%',
        height: 154,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },   
    input: {
        width: 296,
        height: 54,
        padding: 8,
        margin: 16,
        borderRadius: 2,
        border: 'none',
    },    
    button: {
        width: 150,
        color: '#fff',
        height: 54,
        margin: 16,
        background: 'none',
        border: '2px solid #ffffff',
        borderRadius: 2,
        cursor: 'pointer',
    },
    [theme.breakpoints.down('sm')]: {
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
            padding: 5,
        },
        input: {
            width: 150,
            height: 30,
            padding: 8,
            margin: 2,
            alignItems: 'center',
            borderRadius: 2,
            border: 'none',
        },
        button: {
            width: 150,
            color: '#fff',
            height: 54,
            margin: 5,
            background: 'none',
            border: '2px solid #ffffff',
            borderRadius: 2,
            cursor: 'pointer',
        }
    }    
}));