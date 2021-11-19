import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View , ScrollView } from 'react-native';
import { RootTabScreenProps } from '../types';

//componenets
import DailyDigest from '../components/Home/DailyDigest';
import Post from '../components/Global/Post';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (

    <View style={styles.container}>
      <ScrollView>
        <DailyDigest />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#F2F2F2'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
