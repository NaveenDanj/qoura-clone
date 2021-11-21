import React from 'react'
import { StyleSheet, Text, View , Image } from 'react-native'

const Comment = () => {
    return (
        <View style={{ flexDirection : 'row' , marginTop : 10 }}>
            <Image style={{ width : 30 , height : 30 , borderRadius : 15 , alignItems : 'center' }} source={{ uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' }} />
            <View style={{ flex : 1 , marginLeft : 5 , justifyContent : 'center' }}>
                <Text style={{ fontWeight : 'bold' }}>Naveen Dhananjaya</Text>
                <Text style={{ marginTop : 5 }}>Qui laborum dolore fugiat laborum exercitation dolor ex fugiat est exercitation reprehenderit consectetur dolore fugiat. Occaecat eu enim amet fugiat dolore minim dolor nisi est irure.</Text>
            </View>
        </View>
    )
}

export default Comment

const styles = StyleSheet.create({

})
