import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, ScrollView } from 'react-native'
import Post from '../components/Global/Post'

const QuestionView = ( {navigation}:  any) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={{ fontWeight : 'bold' , fontSize : 20 }}>Anim adipisicing in sit sit labore Lorem dolor. Excepteur reprehenderit do commodo esse magna ad.</Text>
            </View>

            <View style={styles.actionBar}> 

                <TouchableOpacity>
                    <FontAwesome name="pencil-square-o" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Entypo name="rss" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="account-arrow-right-outline" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={24} color="black" />
                </TouchableOpacity>

            </View>

            <View style={styles.statusBar}>
                <Text>2 Answers</Text>
            </View>
            
            <ScrollView style={{backgroundColor : '#F2F2F2'}}>
                <Post />
                <Post />
                <Post />
                <Post />
            </ScrollView>

        </View>
    )
}

export default QuestionView

const styles = StyleSheet.create({

    container : {
        backgroundColor : 'white',
        flex : 1

    },

    header : {
        padding : 5,
    },

    actionBar : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 15,
        paddingLeft : 40,
        borderBottomColor : 'gray',
        borderBottomWidth : 0.2
    },

    statusBar : {
        padding : 8,
        backgroundColor : '#F2F2F2'

    }

})