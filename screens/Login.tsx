import { Input } from '@ui-kitten/components'
import React , {useEffect} from 'react'
import { ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View ,  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { getAuth, onAuthStateChanged } from "firebase/auth";

const Login = ({ navigation} : any) => {

    useEffect(() => {

        const auth = getAuth();
        
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log('user has logged in');
            } else {
                // User is signed out
                console.log('user has not logged in');
            }
        });

        return unsubscribe;

    } , []);

    return (
        <View style={{ flex : 1 }}>
            <ImageBackground source={ { uri : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F05%2F22%2F19%2F07%2Fbackground-1409025_960_720.png&f=1&nofb=1' } } resizeMode="cover" style={styles.image} >
                
                <View style={{ flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>

                    <View style={{ flexWrap : 'wrap' , marginHorizontal : 20 }}>
                        <Text style={styles.text}>Quora - Login</Text>
                        <Text style={{color: "white" , alignItems : 'center' , fontSize : 14}} >A place to share knowladge and better understand the world</Text>
                    </View>

                    <View style={{width : '90%' , marginHorizontal : 30 , marginTop : 25 }}>
                        <Input placeholder={'Email'} />
                        <Input placeholder={'Password'} secureTextEntry={true} style={{ marginTop : 10 }} />

                        <View style={{ marginTop : 10 , flexDirection : 'row' , justifyContent : 'space-between' }}>

                            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ backgroundColor: 'rgba(0,0,0,0.3)' , padding : 10 , borderRadius : 20 }} >
                                <Text style={{ color : 'white' }}>Create Account</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: 'rgba(0,0,0,0.3)' , padding : 10 , borderRadius : 20 , width : 90 , alignItems : 'center' }}>
                                <Text style={{ color : 'white' }}>Login</Text>
                            </TouchableOpacity>

                        </View>



                    </View>

                </View>

            </ImageBackground>
        </View>
        
    )
}

export default Login

const styles = StyleSheet.create({

    image : {
        flex: 1,
    },

    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    }


})
