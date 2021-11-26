import { Input } from '@ui-kitten/components'
import React , {useState} from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View ,  } from 'react-native'

import { getAuth , createUserWithEmailAndPassword , updateProfile    } from "firebase/auth";


const Register = ({ navigation } : any) => {


    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [name , setName] = useState('');


    const handleRegister = () => {
        
        const auth:any = getAuth();

        if(name == '' || name == null){
            alert('Name must provided!');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
                
                navigation.resetTo('Root');

            }).catch((error) => {
                alert(error);
            });

        })
        .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            alert(errorCode);
        });

    }



    return (
        <View style={{ flex : 1 }}>
            <ImageBackground source={ { uri : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F05%2F22%2F19%2F07%2Fbackground-1409025_960_720.png&f=1&nofb=1' } } resizeMode="cover" style={styles.image} >
                
                <View style={{ flex : 1 , justifyContent : 'center' , alignItems : 'center' }}>

                    <View style={{ flexWrap : 'wrap' , marginHorizontal : 20 }}>
                        <Text style={styles.text}>Quora - Register</Text>
                        <Text style={{color: "white" , alignItems : 'center' , fontSize : 14}} >A place to share knowladge and better understand the world</Text>
                    </View>

                    <View style={{width : '90%' , marginHorizontal : 30 , marginTop : 25 }}>
                        <Input onChangeText={(text) => setEmail(text)} placeholder={'Email'} />
                        <Input onChangeText={(text) => setPassword(text)} placeholder={'Name'} style={{ marginTop : 10 }} />
                        <Input onChangeText={(text) => setName(text)} placeholder={'Password'} secureTextEntry={true} style={{ marginTop : 10 }} />

                        <View style={{ marginTop : 10 , flexDirection : 'row' , justifyContent : 'space-between' }}>

                            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: 'rgba(0,0,0,0.3)' , padding : 10 , borderRadius : 20 , width : 90 , alignItems : 'center' }}>
                                <Text style={{ color : 'white' }}>Login</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleRegister} style={{ backgroundColor: 'rgba(0,0,0,0.3)' , padding : 10 , borderRadius : 20 }} >
                                <Text style={{ color : 'white' }}>Create Account</Text>
                            </TouchableOpacity>

                        </View>



                    </View>

                </View>

            </ImageBackground>
        </View>
        
    )
}

export default Register

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
