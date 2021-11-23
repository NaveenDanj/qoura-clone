import { EvilIcons, Foundation, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, StyleSheet, Text , View, TouchableOpacity } from "react-native";
import { useDispatch , useSelector} from 'react-redux';

import { setVisibleQuestionDetails } from '../../Redux/OtherModals';


const QuestionDetails = (props : any) => {
    
    const dispatch = useDispatch();

    //@ts-ignore
    const { questionDetails } = useSelector( (state) => state.otherModals )
    
    return (
        <View style={styles.centeredView}>

            <Modal
                presentationStyle = {'fullScreen'}
                animationType="slide"
                visible={questionDetails}
                onRequestClose={() => {
                    dispatch(setVisibleQuestionDetails(false));
                }}
            >

                <View style={styles.container}>
                    
                    <View style={styles.header}>

                        <TouchableOpacity 
                            style={{ justifyContent : 'center' }}
                            onPress={() => dispatch(setVisibleQuestionDetails(false))}
                        >
                        
                            <EvilIcons name="close" size={24} color="black" />
                        </TouchableOpacity>

                    </View>

                    <View style={{ padding : 13 , backgroundColor : 'white' }}>
                        <Text style={{ fontWeight : 'bold' }}>How do I divert a text from another number to my number? </Text>
                    </View>

                    <View style={{ marginTop : 5 }} >

                        <View style={{ padding : 10 ,  backgroundColor : 'white' , borderBottomWidth : 0.2  }} >
                            <Text>Question stats</Text>
                        </View>

                        <View style={{ padding : 15 , backgroundColor : 'white' }}>
                            
                            <View style={{ flexDirection : 'row' }}>
                                <MaterialCommunityIcons name="account-multiple-outline" size={24} color="black" />
                                <View style={{ justifyContent : 'center', marginLeft : 10 }}>
                                    <Text>1 public follower</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection : 'row' , marginTop : 8 }}>
                                <MaterialCommunityIcons name="eye" size={24} color="black" />
                                <View style={{ justifyContent : 'center', marginLeft : 10 }}>
                                    <Text>40 views</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection : 'row' , marginTop : 8 }}>
                                <MaterialCommunityIcons name="rss" size={24} color="black" />
                                <View style={{ justifyContent : 'center', marginLeft : 10 }}>
                                    <Text>Last followed 7h ago</Text>
                                </View>
                            </View>

                        </View>

                    </View>

                    {/* <View style={{ marginTop : 5 }} >

                        <View style={{ padding : 10 ,  backgroundColor : 'white' , borderBottomWidth : 0.2  }} >
                            <Text>Question stats</Text>
                        </View>

                    </View> */}

                </View>

            </Modal>
        
        </View>
    ); 
}

export default QuestionDetails

const styles = StyleSheet.create({

    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },

    container : {
        flex : 1,
        backgroundColor : '#F2F2F2'
    },

    header : {
        padding : 10,
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
  
