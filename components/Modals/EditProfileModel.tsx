import { EvilIcons, Feather } from "@expo/vector-icons";
import React from "react";
import { Modal, StyleSheet, Text, Pressable , Image , View, TouchableOpacity } from "react-native";
import { Button, Input } from "@ui-kitten/components";

import EditProfileInputModel from './EditProfileInputModel'

import { useSelector, useDispatch } from 'react-redux'
import { setShow  } from '../../Redux/EditeProfile'
import { setEditeProfileModelShow  } from '../../Redux/EditAccountInput'

const EditProfileModel = () => {

    //@ts-ignore
    const {value} = useSelector((state) => state.editProfileModel);
    const dispatch = useDispatch();

    console.log('the reducer value is ' , value);

    return (
        <View style={styles.centeredView}>

            <Modal
                presentationStyle = {'fullScreen'}
                animationType="slide"
                visible={value}
                onRequestClose={() => {
                    dispatch(setShow(false));
                }}
            >


                <View style={styles.container}>

                <View style={styles.header}>

                    <TouchableOpacity 
                        style={{ justifyContent : 'center' }}
                        onPress={() => dispatch(setShow(false))}
                    >

                        <EvilIcons name="close" size={24} color="black" />
                    </TouchableOpacity>



                </View>

                    
                    <TouchableOpacity onPress={() => dispatch(setEditeProfileModelShow(true)) } style={styles.EditContainer}>

                        <View style={{ flexDirection : 'row' }}>
                            <Image style={{ width : 30 , height : 30 , borderRadius : 15 }} source={{ uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' }} />
                            <View style={{ justifyContent : 'center' , marginLeft : 10 }}>
                                <Text>Edit Photo</Text>
                            </View>
                        </View>
                        
                        <View style={{ justifyContent : 'center'}}>
                            <Feather name="edit-2" size={16} color="black" />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.EditContainer}>

                        <View>
                            <Text>Edit name</Text>
                            <Text style={{ color : 'gray' , fontSize : 13 }}>Naveen Hettiwaththa</Text>
                        </View>

                        <View style={{ justifyContent : 'center'}}>
                            <Feather name="edit-2" size={16} color="black" />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.EditContainer}>

                        <View>
                            <Text>Edit profile credential</Text>
                        </View>

                        <View style={{ justifyContent : 'center'}}>
                            <Feather name="edit-2" size={16} color="black" />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.EditContainer}>

                        <View>
                            <Text>Edit bio</Text>
                        </View>

                        <View style={{ justifyContent : 'center'}}>
                            <Feather name="edit-2" size={16} color="black" />
                        </View>

                    </TouchableOpacity>

                </View>


            </Modal>

            <EditProfileInputModel />

        </View>
    )
}

export default EditProfileModel

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

    EditContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 8,
        borderBottomWidth : 0.2
    },

    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginBottom : 20
    },


});
