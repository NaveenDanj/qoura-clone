import React from 'react'
import { StyleSheet , View , Text , TouchableOpacity , Image } from 'react-native';


import { Entypo } from '@expo/vector-icons';

function NotificationItem() {
    return (
        <View style={{ borderBottomWidth : 0.2 , borderBottomColor : 'gray'  }} >

            <View style={styles.container}>
            
                <View>
                    <Image style={{width : 40 , height : 40 , borderRadius : 20}} source={ { uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' } } />
                </View>

                <TouchableOpacity style={{ marginLeft : 15 , flex : 1}}>
                    <Text>Username</Text>
                    <Text style={{ fontWeight : 'bold' , fontSize : 13 }}>Anim esse qui amet magna id esse nulla velit. Tempor deserunt aute pariatur culpa laboris ullamco ad nisi ipsum. Mollit veniam veniam mollit exercitation et nulla esse ut elit ullamco labore commodo.</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Entypo name="dots-three-horizontal" size={15} color="black" />
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container : {
        flexDirection : 'row',
        padding : 10
    }

});

export default NotificationItem
