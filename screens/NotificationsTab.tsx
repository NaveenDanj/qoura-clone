import React from 'react'
import { StyleSheet , View , Text } from 'react-native';

//componenets
import Options from '../components/Notifications/Options';

function NotificationsTab() {
    return (
        <View style={styles.container}>
            <Options />
        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        marginTop : 1
    }

})

export default NotificationsTab
