import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'

import { Entypo, EvilIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Question = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight : 'bold' }}>Where can I find coding project ideas as a beginner developer to build my portfolio</Text>
                <TouchableOpacity>
                    <EvilIcons name="close" size={20} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection : 'row' , marginTop : 5 }}>
                <Text style={{fontSize : 13}}>2 answers - </Text>
                <Text style={{fontSize : 13}}>Last followed 5h</Text>
            </View>

            <View style={styles.actionBar}>

                <View style={{ flexDirection : 'row' }}>

                    <TouchableOpacity style={{ marginRight : 20 , flexDirection : 'row' , alignItems : 'center' }}>
                        <FontAwesome name="pencil-square-o" size={20} color="black" />
                        <Text style={{fontSize : 13 , marginLeft : 5}}>Answer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ marginRight : 20 , flexDirection : 'row' , alignItems : 'center' }}>
                        <Entypo name="rss" size={20} color="black" />
                        <Text style={{fontSize : 13 , marginLeft : 5}}>Follow 1</Text>
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


        </View>
    )
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