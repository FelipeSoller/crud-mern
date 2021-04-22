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
        width: 1300,
        border: 'box-sizing',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 200,
        paddingRight: 200,
    }
}));