import * as React from 'react';
import { StyleSheet , View , Text } from 'react-native';

import { Input } from '@ui-kitten/components';
import { EvilIcons } from '@expo/vector-icons';


import SearchItem from '../components/Global/SearchItem';


export default function ModalScreen() {
  return (
    <View style={styles.container}>
     
      <Input 
        placeholder="Search..."
        accessoryRight={<EvilIcons name="search" size={24} color="black" />}
      />

      <SearchItem />
      <SearchItem />
      <SearchItem />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
