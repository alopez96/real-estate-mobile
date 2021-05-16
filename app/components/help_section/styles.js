import { StyleSheet } from 'react-native'

const pading = 30;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: pading,
        marginRight: pading
    },
    corner: {
        position: 'absolute',
        bottom: 20,
        right: 30
    },
    btn:{
        marginTop: pading
    }
})

export default styles;