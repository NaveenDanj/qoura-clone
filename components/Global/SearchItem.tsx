import React, { Component } from 'react'
import { Text, StyleSheet, View , Image , TouchableOpacity } from 'react-native'

export default class SearchItem extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                
                <View>
                    <Image style={{ width : 30 , height : 30 , borderRadius : 15 }} source={{ uri : 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.laptoponbudget.com%2Fwp-content%2Fuploads%2F2019%2F10%2FPython-language.png&f=1&nofb=1' }} />
                </View>

                <View style={{ justifyContent : 'center' , flex : 1 }}>
                    <Text style={{  }}>Space : Sri Lankan civil war Adipisicing fugiat duis magna sit amet.</Text>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container : {
        flexDirection : 'row',
        padding : 10,
        backgroundColor : 'white',
        borderBottomWidth : 0.2,
        borderBottomColor : 'gray'
    }

})
