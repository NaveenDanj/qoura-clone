import React from 'react'
import { FlatList , StyleSheet, Text, View } from 'react-native'
import Question from '../Answer/Question'

const QuestionTab = ({navigation} :  any) => {

    const renderItem = () => (
        <Question />
    );



    return (
        <View>
            
            <View style={{ padding : 10 , borderBottomWidth : 0.2 , borderTopWidth : 0.2 }}>
                <Text>0 Questions</Text>
            </View>

            <FlatList
                style={{ height : 230 }}
                data={[1,2,3]}
                renderItem={renderItem}
                onEndReachedThreshold={0.5}
            />

        </View>
    )
}

export default QuestionTab

const styles = StyleSheet.create({
    container : {

    }
})
