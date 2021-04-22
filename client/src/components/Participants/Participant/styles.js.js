import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    tableContainer: {
        minWidth: '100%',
        marginBottom: 30,
        overflowX: 'auto', 
    },
    table: {
        borderCollapse: 'collapse',
        fontFamily: 'Arial',
        marginLeft: 50,
    },
    th: {
        border: '1px solid #999',
        paddingTop: 16,
        paddingRight: 18,
        paddingBottom: 16,
        paddingLeft: 18,
        textAlign:'center',
        color: '#707070',
        fontSize: 14,    
        fontWeight: 'bold',   
    },
    td: {
        border: '1px solid #999',
        paddingTop: 16,
        paddingRight: 18,
        paddingBottom: 16,
        paddingLeft: 18,
        textAlign:'center',
        color: '#707070',
        fontSize: 14,       
    },
    button: {
        width: 80,
        padding: 5,
        color: 'red',
        height: 34,
        background: 'white',
        border: '2px solid red',
        borderRadius: 10,
        cursor: 'pointer',
    }
}))