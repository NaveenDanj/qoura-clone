import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import FollowingItem from './FollowingItem'

const FollowersTab = () => {

    const renderItem = () => (
        <FollowingItem />
    );

    return (
        <View>
            
            <View style={{ padding : 10 , borderBottomWidth : 0.2 , borderTopWidth : 0.2 }}>
                <Text>0 Followers</Text>
            </View>

            

            <FlatList
                style={{ height : 230 }}
                data={[1,2,3,4]}
                renderItem={renderItem}
                onEndReachedThreshold={0.5}
            />

        </View>
    )
}

export default FollowersTab

const styles = StyleSheet.create({
    container : {

    }
})
