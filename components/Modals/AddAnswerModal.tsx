import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, StyleSheet, Text, Pressable , Image , View, TouchableOpacity } from "react-native";
import { useDispatch , useSelector} from 'react-redux';

import { Button, Input } from "@ui-kitten/components";

import {setVisibleAddAnswer} from '../../Redux/OtherModals';


const CreateAnswer = (props : any) => {
    
    const dispatch = useDispatch();

    //@ts-ignore
    const { addAnswer } = useSelector( (state) => state.otherModals )
    
    return (
        <View style={styles.centeredView}>
            <Modal
                presentationStyle = {'fullScreen'}
                animationType="slide"
                visible={addAnswer}
                onRequestClose={() => {
                    dispatch(setVisibleAddAnswer(false));
                }}
            >

                <View style={styles.container}>
                    
                    <View style={styles.header}>

                        <TouchableOpacity 
                            style={{ justifyContent : 'center' }}
                            onPress={() => dispatch(setVisibleAddAnswer(false))}
                        >
                        
                            <EvilIcons name="close" size={24} color="black" />
                        </TouchableOpacity>

                        <Button 
                            style={{ borderRadius : 20 }}
                            onPress={() => dispatch(setVisibleAddAnswer(false))}
                        >
                            Add
                        </Button>


                    </View>

                    <View style={styles.userData}>
                        <Image style={{ width : 20 , height : 20 , borderRadius : 10 }} source={{uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' }} />
                        <Text style={{ alignItems : 'center' , color : 'gray' , marginLeft : 5}}>Naveen Hettiwaththa asked</Text>
                    </View>

                    <View style={styles.userInput}>
                        <Input
                            multiline = {true}
                            placeholder='Start your question with "What" , "How" , "Why" , etc.'
                            
                        />
                    </View>



                </View>


            </Modal>
        </View>
    ); 
}

export default CreateAnswer

const styles = StyleSheet.create({

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },

    container : {
        padding : 10
    },

    header : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },

    notice : {
        padding : 15,
        backgroundColor : '#EBF0FF',
        marginTop : 30,
        marginHorizontal : 10
    },

    userData : {
        flexDirection : 'row',
        padding : 15,
    },

    userInput : {
        padding : 15
    }


  });
  
