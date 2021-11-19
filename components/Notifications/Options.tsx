import React from 'react'
import { StyleSheet , View , Text , TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

function Options() {
    return (
        <View style={ styles.container }>

            <View>
                <Text>Mark All As Read</Text>
            </View>

            <View style={{ flexDirection : 'row' }}>

                <TouchableOpacity>
                    <Octicons name="settings" size={20} color="black" style={{ marginRight : 10 }} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="settings-outline" size={20} color="black" />
                </TouchableOpacity>
                
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        padding : 15,
        backgroundColor : 'white',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }

});

export default Options
