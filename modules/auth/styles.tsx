import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e9f0f7',
        flex:1,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100, 
        marginTop: 30
    },
    formGroup:{
        width:'100%',
        marginTop: 30
    },
    input:{
        backgroundColor:'#fff',
        height: 60,
        marginTop: 1,
    },
    centerHorizontal:{
        alignItems:'center'
    },
    btnLogin:{
        marginHorizontal:10,
        marginTop: 30,
        backgroundColor:'#0f6db5', 
        borderRadius: 10,
        height: 50
    },
    row:{
        flexDirection:'row'
    },
    center:{
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        color: 'gray',
        fontSize: 20,
        margin: 10
    },
    link:{
        color: '#438cc4',
        marginTop: 20
    },
    footer:{
        bottom: 0,
        position: 'absolute',
    },
    check:{
        marginTop: 15
    }, 
    failed:{
        backgroundColor: '#fedede',
        color: 'red',
        borderWidth: 1,
        borderColor: 'red',
        height: 60,
    },
    success:{
        backgroundColor: '#fff',
        color: 'black',
        borderWidth: 0,
        height: 60,
        marginTop: 1,
    }
})