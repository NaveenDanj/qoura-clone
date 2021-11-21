import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { List, ListItem } from '@ui-kitten/components';

import Question from '../Answer/Question'


const AnswerTab = (props : any) => {

    const navigation = props.navigation

    const renderItem = () => (
        <Question navigation={navigation} />
    );


    return (

        <View style={styles.container}>
            
            <View style={{ padding : 10 , borderBottomWidth : 0.2 , borderTopWidth : 0.2 }}>
                <Text>0 Answers</Text>
            </View>

            <View>
                <FlatList
                    style={{ height : 230 }}
                    data={[1,2,3,4,5 ,6,8]}
                    renderItem={renderItem}
                    onEndReachedThreshold={0.5}
                />
            </View>

            

        </View>

    )
}

export default AnswerTab

const styles = StyleSheet.create({
    container : {

    }
})
