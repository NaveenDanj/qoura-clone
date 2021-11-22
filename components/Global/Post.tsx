import React , {useState} from 'react'
import { StyleSheet , Text, View , Image , TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Input } from '@ui-kitten/components';


import Comment from '../Global/Comment'

function Post(props : any) {

    const navigation = props.navigation

    const [showComment , setShowComment] = useState(false);

    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                
                <View style={styles.userData} >

                    <View style={{ flexDirection : 'row' }}>
                        <View>
                            <Image style={{ width : 36 , height : 36 , borderRadius : 18 }} source={{ uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' }} />
                        </View>

                        <View style={styles.userText}>
                            <Text onPress={() => navigation.push('Profile')} style={{ fontWeight : 'bold' }}>Username</Text>
                            <Text>Studied at Fedaral Institute Studied Studied Studied </Text>
                        </View>
                    </View>

                    <TouchableOpacity>
                        <Ionicons name="md-close" size={20} color="black" />
                    </TouchableOpacity>

                </View>


                <View style={styles.question}>
                    <Text style={{fontSize : 15 , fontWeight : 'bold'}}>Studied at Fedaral Institute Studied Studied Studied Studied at Fedaral Institute Studied Studied Studied </Text>
                </View>

                <View style={styles.answer}>
                    <Text>
                        Adipisicing voluptate officia in esse amet enim. Elit adipisicing enim ullamco do enim id cupidatat adipisicing ut Lorem in anim est est. Laboris sunt velit aliqua exercitation aute sint est. Dolor pariatur ex aliquip magna commodo reprehenderit ipsum laborum do excepteur reprehenderit. Deserunt tempor ad et est incididunt consequat eu Lorem labore. Magna commodo elit enim pariatur cillum reprehenderit mollit reprehenderit id officia aliqua fugiat reprehenderit.
                    </Text>
                </View>


            </View>

            <View>
                <Image style={{ width : '100%' , aspectRatio : 3/2  }} source={{ uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' }} />
            </View>

            <View style={ styles.actionBar }>

                <View style={{ flexDirection : 'row' }}>
                    
                    <View style={styles.voteButtons}>
                        <TouchableOpacity style={{ flexDirection : 'row' , alignItems : 'center' , marginRight : 5 }}>
                        <Foundation name="arrow-up" size={20} color="black" />
                            <Text style={{ marginLeft : 3 }}>113 | </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection : 'row' , alignItems : 'center' , marginRight : 5 }}>
                            <MaterialCommunityIcons name="arrow-down-bold" size={20} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection : 'row' , alignItems : 'center' , marginLeft : 10  }}>

                        <TouchableOpacity onPress = { () => setShowComment(!showComment) } style={{ flexDirection : 'row' , marginRight : 10}}>
                            <Fontisto name="comment" size={15} color="black" />
                            <Text>13</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection : 'row'}}>
                            <AntDesign name="sharealt" size={15} color="black" />
                            <Text>13</Text>                        
                        </TouchableOpacity>

                    </View>

                </View>

                <TouchableOpacity style={{ alignItems : 'center' , margin : 5 }}>
                    <MaterialCommunityIcons name="dots-horizontal" size={15} color="black" />
                </TouchableOpacity>

            </View>

            { showComment && (

                <View style={styles.comments}>

                    <View style={{ flexDirection : 'row' }}>
                        <Image style={{ width : 40 , height : 40 , borderRadius : 20 , alignItems : 'center' }} source={{ uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' }} />
                        <View style={{ flex : 1 , marginLeft : 5 , justifyContent : 'center' }}>
                            <Input placeholder={''} style={{ borderRadius : 25 }} />
                        </View>
                    </View>

                </View>

            ) } 

            { showComment && (

                <View style={styles.commentsList}>

                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />

                </View>

            ) } 
            

        </View>
    )
}


const styles = StyleSheet.create({

    header : {
        margin : 15,
    },

    container : {
        backgroundColor : 'white',
        marginTop : 10
    },

    userData : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },

    userText : {
        marginLeft : 5
    },

    question : {
        marginTop : 10
    },

    answer : {
        marginTop : 5
    },

    actionBar : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        margin : 5,
    },

    voteButtons : {
        flexDirection : 'row',
        padding : 5,
        backgroundColor : '#F2F2F2',
        borderRadius : 20
    },

    commentsList : {
        backgroundColor : '#F2F2F2',
        padding : 10,
        
    },

    comments : {
        backgroundColor : '#F2F2F2',
        padding : 10,
        borderBottomWidth : 0.2,
        
    }

})

export default Post
