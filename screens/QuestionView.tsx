import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View , TouchableOpacity, ScrollView } from 'react-native'
import {useDispatch , useSelector} from 'react-redux'
import {setVisibleAddAnswer , setVisibleQuestionDetails} from '../Redux/OtherModals';

import Post from '../components/Global/Post'
import AddAnswer from '../components/Modals/AddAnswerModal';
import QuestionDetails from '../components/Modals/QuestionDetails';


const QuestionView = ( {navigation}:  any) => {
    
    const dispatch = useDispatch();
    //@ts-ignore
    const {questionDetails} = useSelector((state)=> state.otherModals);
    
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={{ fontWeight : 'bold' , fontSize : 20 }}>Anim adipisicing in sit sit labore Lorem dolor. Excepteur reprehenderit do commodo esse magna ad.</Text>
            </View>

            <View style={styles.actionBar}> 

                <TouchableOpacity
                    onPress={ () => dispatch( setVisibleAddAnswer(true) ) }
                >
                    <FontAwesome name="pencil-square-o" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Entypo name="rss" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity>
                    <MaterialCommunityIcons name="account-arrow-right-outline" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress = {() => { 
                        dispatch( setVisibleQuestionDetails(true) ) 
                        console.log('handled!' , questionDetails);
                    }}
                >
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

            <AddAnswer />
            <QuestionDetails />

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
