import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    titleContainer: {
        textAlign: 'center',
        border: 'box-sizing',
        margin: 40,
    },   
    title: {
        margin: 20,
        fontSize: 30,
        letterSpacing: -1,
        color: '#394b50',
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    subTitle: {
        fontSize: 16,
        color: '#394b50',
        fontFamily: 'Arial',
    },
    tablesContainer: {
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
    }    
}));