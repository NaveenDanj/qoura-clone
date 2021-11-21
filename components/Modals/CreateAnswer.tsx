import { EvilIcons } from "@expo/vector-icons";
import React, { useState , useContext } from "react";
import { Modal, StyleSheet, Text, Pressable , Image , View, TouchableOpacity } from "react-native";

import { Button, Input } from "@ui-kitten/components";

import { createQuestionModelContext } from "../Contexts/CreateQuestionContext";


const CreateAnswer = (props : any) => {
    
    const [isOpen , setIsOpen] = useContext(createQuestionModelContext);
    
    return (
        <View style={styles.centeredView}>
            <Modal
                presentationStyle = {'fullScreen'}
                animationType="slide"
                visible={props.openModel}
                onRequestClose={() => {
                    setIsOpen(!isOpen);
                }}
            >



                {/* <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setIsOpen(!isOpen)}
                        >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View> */}

                <View style={styles.container}>
                    
                    <View style={styles.header}>

                        <TouchableOpacity 
                            style={{ justifyContent : 'center' }}
                            onPress={() => setIsOpen(!isOpen)}
                        >
                        
                            <EvilIcons name="close" size={24} color="black" />
                        </TouchableOpacity>

                        <Button 
                            style={{ borderRadius : 20 }}
                            onPress={() => setIsOpen(!isOpen)}
                        >
                            Add
                        </Button>


                    </View>

                    <View style={styles.notice}>
                        {/* 2E69FF */}
                        <Text style={{ color : '#2E69FF' , fontWeight : 'bold' , fontSize : 15 }}>Tips on getting good answers quickly</Text>
                        <View style={{ marginLeft : 10 , marginTop : 5 }}>
                            <Text style={{ color : '#2E69FF'}}>* Make sure your question has not been ask already</Text>
                            <Text style={{ color : '#2E69FF'}}>* Keep your question short and to the point</Text>
                            <Text style={{ color : '#2E69FF'}}>* Double check grammer and spelling</Text>

                        </View>
                    </View>

                    <View style={styles.userData}>
                        <Image style={{ width : 20 , height : 20 , borderRadius : 10 }} source={{uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' }} />
                        <Text style={{ alignItems : 'center' , color : 'gray' , marginLeft : 5}}>Naveen Hettiwaththa asked</Text>
                    </View>

                    <View style={styles.userInput}>
                        <Input
                            multiline = {true}
                            // textStyle={{ minHeight: 64 }}
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
  
