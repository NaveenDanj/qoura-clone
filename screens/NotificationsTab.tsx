import React from 'react'
import { StyleSheet , View , ScrollView , Text } from 'react-native';

//componenets
import Options from '../components/Notifications/Options';
import NotificationItem from '../components/Notifications/NotificationItem';

function NotificationsTab() {
    return (
        <View style={styles.container}>
            <Options />
            <ScrollView>
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
            </ScrollView>

            

        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        marginTop : 1,
        paddingBottom : 60

    }

})

export default NotificationsTab
