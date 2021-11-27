import React , {useState , useEffect} from 'react'
import { StyleSheet , View , Text , ScrollView, FlatList } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

//components
import Question from './Question';

import { collection, getDocs , getFirestore , query } from "firebase/firestore";


function ForYouTab() {


    const [questions , setQuestions] = useState([]);

    useEffect(() => {

        const db = getFirestore();
        const q = query(collection(db, "Questions"));

        setQuestions([]);

        getDocs(q)
        .then(snapshot => {
            snapshot.forEach((doc) => {
                console.log('the doc is ' , doc.data());
                //@ts-ignore
                setQuestions(items => [...items , doc.data()]);
            })

        });

    } , []);


    return (

        <View style={styles.container}>
            
            <View style={{ flexDirection : 'row' , padding : 10 , borderBottomColor : 'gray' , borderBottomWidth : 0.2 }}>
                <FontAwesome name="star" size={18} color="black" />
                <Text style={{ alignItems : 'center' , marginLeft : 5 }}>Questions for you</Text>
            </View>

            {/* <ScrollView>
                <Question />
                <Question />
            </ScrollView> */}

            <FlatList
                contentContainerStyle={{ paddingBottom: 90 }}
                data={questions}
                renderItem={renderItem}
                keyExtractor={(item:any) => item.id}
            />

        </View>

    )
}


const renderItem = ({item} : any) => {

    console.log('the render item is ' , item);

    return (
        <Question qData={item} />
    )

}


const styles = StyleSheet.create({

    container : {
        backgroundColor : 'white',
        paddingBottom : 60,
        // flex : 1
    }

})

export default ForYouTab
