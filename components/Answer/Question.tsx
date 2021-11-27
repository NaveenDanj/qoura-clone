import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'

import { Entypo, EvilIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import {useDispatch} from 'react-redux'
import {setVisibleQuestionDetails} from '../../Redux/OtherModals';


const Question = (props : any) => {
    
    const navigation = props.navigation;

    if(props.qData &&  props.qData.username != undefined){

        return (    
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{ fontWeight : 'bold' }}>{ props.qData.question }</Text>
                    <TouchableOpacity>
                        <EvilIcons name="close" size={20} color="black" />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection : 'row' , marginTop : 5 }}>
                    <Text style={{fontSize : 13}}>{ props.qData.answers } answers - </Text>
                    <Text style={{fontSize : 13}}>Last followed { props.qData.lastFollowed }</Text>
                </View>

                <View style={styles.actionBar}>

                    <View style={{ flexDirection : 'row' }}>

                        <TouchableOpacity onPress={() => navigation.navigate('QuestionView') } style={{ marginRight : 20 , flexDirection : 'row' , alignItems : 'center' }}>
                            <FontAwesome name="pencil-square-o" size={20} color="black" />
                            <Text style={{fontSize : 13 , marginLeft : 5}}>Answer</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginRight : 20 , flexDirection : 'row' , alignItems : 'center' }}>
                            <Entypo name="rss" size={20} color="black" />
                            <Text style={{fontSize : 13 , marginLeft : 5}}>Follow { props.qData.followers }</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginRight : 20 , flexDirection : 'row' , alignItems : 'center' }}>
                            <MaterialCommunityIcons name="format-color-marker-cancel" size={20} color="black" />
                            <Text style={{fontSize : 13 , marginLeft : 5}}>Pass</Text>
                        </TouchableOpacity>

                    </View>

                    <View>
                        <TouchableOpacity style={{ marginRight : 20 , flexDirection : 'row' , alignItems : 'center' }}>
                            <MaterialCommunityIcons name="dots-horizontal" size={20} color="black" />
                        </TouchableOpacity>
                    </View>


                </View>

                {/* <AddAnswer /> */}


            </View>
        )

    }else{
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
}



export default Question

const styles = StyleSheet.create({

    header : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },

    container : {
        padding : 10,
        borderBottomColor : 'gray',
        borderBottomWidth : 0.2
    },

    actionBar : {
        marginTop : 7,
        flexDirection : 'row',
        justifyContent : 'space-between'
    }

})
