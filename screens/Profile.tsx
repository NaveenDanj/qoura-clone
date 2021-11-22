import { MaterialCommunityIcons, Ionicons, SimpleLineIcons, MaterialIcons, EvilIcons, Fontisto } from '@expo/vector-icons'
import { Button, Tab, TabView } from '@ui-kitten/components/ui'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View , Image } from 'react-native'
import FollowingTab from '../components/Account/FollowingTab'
import FollowersTab from '../components/Account/FollwersTab'
import QuestionTab from '../components/Account/QuestionTab'
import AnswersTab from '../components/Account/AnswerTab'

const Profile = ({navigation} : any) => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);



    return (
        <View style={styles.container}>
            
            <View style={{ backgroundColor : 'white' , padding : 5 }}>

                <View style={{ flexDirection : 'row' }}>

                    <View>
                        <Image style={{ width : 80 , height : 80 , borderRadius : 40 }} source={{ uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' }} />
                    </View>

                    <View style={{ justifyContent : 'center' , flex : 1 , marginLeft : 10 }}>
                        <Text style={{ fontSize : 20 , fontWeight : 'bold' }}>Username</Text>

                        <View>
                            <Text style={{ fontSize : 15 }}>Nostrud incididunt id ex consequat sunt aliquip eu est laboris. </Text>
                        </View>

                        <View style={{ marginTop : 10 }}>
                            <Text>0 Followers - 0 Following</Text>
                        </View>

                    </View>

                </View>

                <View style={{ flexDirection : 'row' , marginVertical : 17 , marginHorizontal : 35 , justifyContent : 'space-between'}}>

                    <TouchableOpacity>
                        <SimpleLineIcons name="user-follow" size={20} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <MaterialCommunityIcons name="comment-question-outline" size={20} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <MaterialCommunityIcons name="dots-horizontal" size={20} color="black" />
                    </TouchableOpacity>


                </View>
            
            </View>

            <View style={{ backgroundColor : 'white' , marginTop : 5 }}>
                
                <View style={{ padding : 10 , flexDirection : 'row' , justifyContent : 'space-between' , borderBottomColor : 'gray' , borderBottomWidth : 0.2 }}>

                    <View style={{ justifyContent : 'center' }}>
                        <Text>Credentials & Highlights</Text>
                    </View>

                    <TouchableOpacity  style={{ alignItems : 'center' }}>
                        <Text>More</Text>
                    </TouchableOpacity>

                </View>

            </View>

            <View  style={{ backgroundColor : 'white' , padding : 10}}>

                <View style={{ flexDirection : 'row' }}>

                    <View>
                        <MaterialIcons name="work-outline" size={24} color="black" />
                    </View>

                    <View style={{ justifyContent : 'center' , marginLeft : 10 }}>
                        <Text>Add employment credential</Text>
                    </View>
                
                </View>

                <View style={{ flexDirection : 'row' , marginTop : 10 }}>

                    <View>
                        <Ionicons name="school-outline" size={24} color="black" />
                    </View>

                    <View style={{ justifyContent : 'center' , marginLeft : 10 }}>
                        <Text>Add educational credential</Text>
                    </View>
                
                </View>

                <View style={{ flexDirection : 'row' , marginTop : 10 }}>

                    <View>
                        <EvilIcons name="location" size={24} color="black" />
                    </View>

                    <View style={{ justifyContent : 'center' , marginLeft : 10 }}>
                        <Text>Add location credential</Text>
                    </View>
                
                </View>

                <View style={{ flexDirection : 'row' , marginTop : 10 }}>

                    <View>
                        <Fontisto name="date" size={24} color="black" />
                    </View>

                    <View style={{ justifyContent : 'center' , marginLeft : 10 }}>
                        <Text>Joined August 2020</Text>
                    </View>
                
                </View>



            </View>

            <View  style={{ backgroundColor : 'white' , marginTop : 5 , paddingBottom : 10}}>

                <TabView
                    style={{ marginTop : 1 }}
                    selectedIndex={selectedIndex}
                    onSelect={index => setSelectedIndex(index)}>

                    <Tab title='Answers' >
                        <AnswersTab navigation={navigation} />
                    </Tab>

                    <Tab title='Questions'>
                        <QuestionTab />
                    </Tab>

                    <Tab title='Followers'>
                        <FollowersTab />
                    </Tab>

                    <Tab title='Following'>
                        <FollowingTab />
                    </Tab>


                </TabView>

            </View>



        </View>
    )
}

export default Profile

const styles = StyleSheet.create({

    container : {
        padding : 1,
    }

})
