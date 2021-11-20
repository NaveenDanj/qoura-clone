import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View , ScrollView } from 'react-native'

import Question from './Question'


const RequestTab = () => {
    return (
        
        <View style={styles.container}>
                
            <View style={{ flexDirection : 'row' , padding : 10 , borderBottomColor : 'gray' , borderBottomWidth : 0.2 }}>
                <FontAwesome name="star" size={18} color="black" />
                <Text style={{ alignItems : 'center' , marginLeft : 5 }}>Requested for an answer</Text>
            </View>
            

            <ScrollView>
                <Question />
                <Question />
                <Question />

                <Question />
                <Question />
                <Question />

                <Question />
                <Question />
                <Question />

                <Question />
                <Question />
                <Question />

                <Question />
                <Question />
                <Question />
            </ScrollView>

        </View>


    )
}

export default RequestTab

const styles = StyleSheet.create({

    container : {
        backgroundColor : 'white',
        paddingBottom : 60
    }

})
