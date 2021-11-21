import { MaterialIcons } from '@expo/vector-icons'
import React , {useState , useContext} from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import CreateAnswer from "../Modals/CreateAnswer";

import {createQuestionModelContext} from '../Contexts/CreateQuestionContext';


const CreateAnswerButton = () => {

    // const [isOpen , setIsOpen] = useState(false);

    const [isOpen , setIsOpen] = useContext(createQuestionModelContext);

    return (

        <>

            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.btnStyle}
                onPress={() => setIsOpen(true)}
                >
            
                <MaterialIcons name="add" style={{ color : 'white' }} size={30} color="black" />

            </TouchableOpacity>

            <CreateAnswer openModel={isOpen}  setOpenModel={setIsOpen} />

        </>

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


});
