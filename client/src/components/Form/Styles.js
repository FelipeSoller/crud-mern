import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    header: {
        width: '100%',
        height: 154,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b8e2',
    },    
    input: {
        width: 296,
        height: 54,
        padding: 8,
        marginRight: 16,
        borderRadius: 2,
        border: 'none',
    },    
    button: {
        width: 150,
        color: '#fff',
        height: 54,
        background: 'none',
        border: '2px solid #ffffff',
        borderRadius: 2,
        cursor: 'pointer',
    },    
}));