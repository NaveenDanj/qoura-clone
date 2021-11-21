import { EvilIcons, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View , Image, TouchableOpacity , ScrollView } from 'react-native'
import { Button} from '@ui-kitten/components';

import { TabView, Tab } from '@ui-kitten/components';
import AnswersTab from '../components/Account/AnswerTab';
import QuestionTab from '../components/Account/QuestionTab';
import PostTab from '../components/Account/PostTab';
import FollowingTab from '../components/Account/FollowingTab';
import FollowersTab from '../components/Account/FollwersTab';

const AccountTab = ({navigation} :  any) => {
    
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (

        <View style={styles.container}>
            
            <View style={{ backgroundColor : 'white' , padding : 5 }}>

                <View style={{ flexDirection : 'row' }}>

                    <View>
                        <Image style={{ width : 80 , height : 80 , borderRadius : 40 }} source={{ uri : 'https://avatars.githubusercontent.com/u/48654030?v=4' }} />
                    </View>

                    <View style={{ justifyContent : 'center' , marginLeft : 10 }}>
                        <Text style={{ fontSize : 20 , fontWeight : 'bold' }}>Username</Text>

                        <View style={{ marginTop : 10 }}>
                            <Text>0 Followers - 0 Following</Text>
                        </View>

                    </View>

                </View>

                <View style={{ flexDirection : 'row' , marginTop : 15 , marginBottom : 5 }}>

                    <Button
                        style={{ flex : 1 , borderRadius : 20 , height : 10 }}
                        appearance='outline' 
                        accessoryLeft={ <MaterialCommunityIcons name="pencil" size={20} color="black" /> }
                        >
                        Edit Profile
                    </Button>

                    <TouchableOpacity style={{ justifyContent : 'center' , marginLeft : 10 , marginRight : 10 }}>
                        <Ionicons name="share-social-outline" size={20} color="black" />
                    </TouchableOpacity>

                </View>
            
            </View>

            <View style={{ backgroundColor : 'white' , marginTop : 5 }}>
                
                <View style={{ padding : 10 , flexDirection : 'row' , justifyContent : 'space-between' , borderBottomColor : 'gray' , borderBottomWidth : 0.2 }}>

                    <View style={{ justifyContent : 'center' }}>
                        <Text>Credentials & Highlights</Text>
                    </View>

                    <TouchableOpacity  style={{ alignItems : 'center' }}>
                        <MaterialCommunityIcons name="pencil-outline" size={24} color="black" />
                    </TouchableOpacity>

                </View>

            </View>

            <View  style={{ backgroundColor : 'white' , padding : 10}}>

                <View style={{ flexDirection : 'row' }}>

                    <View>
                        <MaterialIcons name="work-outline" size={24} color="black" />
                    </View>

                    <TouchableOpacity style={{ justifyContent : 'center' , marginLeft : 10 }}>
                        <Text style={{ color : 'blue' }}>Add employment credential</Text>
                    </TouchableOpacity>
                
                </View>

                <View style={{ flexDirection : 'row' , marginTop : 10 }}>

                    <View>
                        <Ionicons name="school-outline" size={24} color="black" />
                    </View>

                    <TouchableOpacity style={{ justifyContent : 'center' , marginLeft : 10 }}>
                        <Text style={{ color : 'blue' }}>Add educational credential</Text>
                    </TouchableOpacity>
                
                </View>

                <View style={{ flexDirection : 'row' , marginTop : 10 }}>

                    <View>
                        <EvilIcons name="location" size={24} color="black" />
                    </View>

                    <TouchableOpacity style={{ justifyContent : 'center' , marginLeft : 10 }}>
                        <Text style={{ color : 'blue' }}>Add location credential</Text>
                    </TouchableOpacity>
                
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

export default AccountTab

const styles = StyleSheet.create({

    container : {
        padding : 1,
    }

})
