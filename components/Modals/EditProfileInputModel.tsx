import { AntDesign, EvilIcons} from "@expo/vector-icons";
import React from "react";
import { Modal, StyleSheet, Text , View, TouchableOpacity , ScrollView , KeyboardAvoidingView } from "react-native";
import { Button, Input } from "@ui-kitten/components";

import { useSelector, useDispatch } from 'react-redux'
import { setEditeProfileModelShow  } from '../../Redux/EditAccountInput'

const EditProfileModel = () => {

    //@ts-ignore
    const {ModalOpen} = useSelector((state => state.editAccountInputModal))
    const dispatch = useDispatch();


    return (
        <View 
            style={styles.centeredView}
        
        >

            <Modal
                presentationStyle = {'fullScreen'}
                animationType="slide"
                visible={ModalOpen}
                onRequestClose={() => {
                    dispatch(setEditeProfileModelShow(false));
                }}
            >


                <ScrollView style={styles.container}>

                    <View style={styles.header}>

                        <TouchableOpacity 
                            style={{ justifyContent : 'center' }}
                            onPress={() => dispatch(setEditeProfileModelShow(false))}
                        >

                            <EvilIcons name="close" size={24} color="black" />
                        </TouchableOpacity>

                        <View style={{ flexDirection : 'row' }}>

                            <TouchableOpacity style={{ justifyContent : 'center' }}>
                                <Text>Cancel</Text>
                            </TouchableOpacity>

                            <Button 
                                style={{ borderRadius : 20 , marginLeft : 10 }}
                                onPress={() => setEditeProfileModelShow(false)}
                            >
                                Save
                            </Button>


                        </View>

                        

                    </View>

                    <View>
                        <Text style={{ fontSize : 15 , fontWeight : 'bold' }}>Edit credentials</Text>
                        <Text style={{ color : 'gray' , marginTop : 5 }}>Credentials are credibility to your content</Text>
                    </View>

                    <View style={styles.inputContainer}>

                        <View style={{ flexDirection : 'row' , padding : 10 , borderBottomWidth : 0.2 }}>
                            <AntDesign name="infocirlceo" size={24} color="black" />
                            <View style={{ justifyContent : 'center' , marginLeft : 5 }}>
                                <Text>Add / Edit Credentials</Text>
                            </View>
                        </View>

                        <View style={{ padding : 10}}>
                            <Text style={{ fontWeight : 'bold' }}>School</Text>
                            <Input style={{ marginTop : 5 }} placeholder={'New York University'} />
                        </View>

                        <View style={{ padding : 10}}>
                            <Text style={{ fontWeight : 'bold' }}>Company / Organization</Text>
                            <Input style={{ marginTop : 5 }} placeholder={'Toyota'} />
                        </View>

                        <View style={{ padding : 10}}>
                            <Text style={{ fontWeight : 'bold' }}>Location</Text>
                            <Input style={{ marginTop : 5 }} placeholder={'Sri Lanka'} />
                        </View>

                        <View style={{ padding : 10}}>
                            <Text style={{ fontWeight : 'bold' }}>Bio</Text>
                            <Input multiline={true} style={{ marginTop : 5 }} placeholder={'Add bio'} />
                        </View>

                    </View>
                    

                </ScrollView>


            </Modal>


        </View>
    )
}

export default EditProfileModel

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        flexGrow: 1,
        padding: 20
    },
  
    container : {
        flexGrow : 1,
        paddingHorizontal : 10,
        paddingBottom : 0

    },

    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 20,
        marginTop : 10
    },

    inputContainer : {
        borderWidth : 0.2,
        marginTop : 25

    }


});
