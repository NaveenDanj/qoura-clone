import React from 'react'
import { StyleSheet , Text, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

function DailyDigest() {
    return (
        <View style={styles.component}>
            
            <View>
                <Ionicons name="md-mail-open-outline" size={50} color="black" />
            </View>

            <View style={styles.digestContent}>
                <Text style={{ fontSize : 17 , fontWeight : 'bold' }}>Your Daily Digest</Text>
                <Text style={{ flex: 1 }}>Are SQL and Python enough to get a job? Are SQL and Python enough to get a job?</Text>
            </View>


        </View>
    )
}


const styles = StyleSheet.create({

    component : {
        flexDirection : 'row',
        padding : 10,
        backgroundColor : 'white',
        borderTopColor : 'gray',
        borderTopWidth : 1
    },

    digestContent : {
        flex: 1,
        justifyContent : 'center',
        marginLeft : 5,
    }

})



export default DailyDigest
