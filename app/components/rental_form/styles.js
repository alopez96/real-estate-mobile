import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 8,
        minWidth: 150,
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10
      },
      row:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexEnd:{
      alignItems: 'flex-end',
    },
    lightText:{
      color: '#858585'
    }
});

export default styles;