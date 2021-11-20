import React from 'react'
import { StyleSheet , View , Text , ScrollView } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

//components
import Question from './Question';


function ForYouTab() {
    return (

        <View style={styles.container}>
            
            <View style={{ flexDirection : 'row' , padding : 10 , borderBottomColor : 'gray' , borderBottomWidth : 0.2 }}>
                <FontAwesome name="star" size={18} color="black" />
                <Text style={{ alignItems : 'center' , marginLeft : 5 }}>Questions for you</Text>
            </View>

            <ScrollView>
                <Question />
                <Question />
                
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({

    container : {
        backgroundColor : 'white',
        paddingBottom : 60
    }

})

export default ForYouTab
