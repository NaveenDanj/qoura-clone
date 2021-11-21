import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CreateAnswerButton = () => {
    return (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.btnStyle}>
          
            <MaterialIcons name="add" style={{ color : 'white' }} size={30} color="black" />

        </TouchableOpacity>
    )
}

export default CreateAnswerButton

const styles = StyleSheet.create({

    btnStyle: {
        //Here is the trick
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius : 25,
        backgroundColor : '#3366FF',
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 20,
     },


})
