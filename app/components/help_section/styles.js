import { StyleSheet } from 'react-native'

const paddingTop = 12;
const paddingSides = 40;

const styles = StyleSheet.create({
    content:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 81, 0)',
        paddingTop: paddingTop,
        paddingBottom: paddingTop,
        paddingLeft: paddingSides,
        paddingRight: paddingSides,
        borderRadius: 50,
        margin: 20
    },
    text:{
        color: 'white',
        fontSize: 27,
        marginLeft: 5
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    corner: {
        position: 'absolute',
        bottom: 20,
        right: 30
    }
})

export default styles;