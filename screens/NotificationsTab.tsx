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

                <View style={{ marginTop : 50 }}>
                </View>

            </ScrollView>

            

        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        marginTop : 1
    }

})

export default NotificationsTab
