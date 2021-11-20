import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Post from '../Global/Post'


const PostTab = () => {
    return (
        <View>
            
            <View style={{ padding : 10 , borderBottomWidth : 0.2 , borderTopWidth : 0.2 }}>
                <Text>0 Posts</Text>
            </View>

            <ScrollView>
                <Post />
                <Post />
                <Post /> 
            </ScrollView>

        </View>
    )
}

export default PostTab

const styles = StyleSheet.create({
    container : {

    }
})
