import React, {useState} from 'react';
import {TextInput, Text, View, TouchableOpacity} from 'react-native';
import {STRINGS} from '../../../src/constants/index';

const ReadMore = ({navigation, route}) => {
  console.log(route);
  const [update, setUpdate] = useState(route.params.data);
  const {Notes} = STRINGS;
  return (
    <View>
      <TextInput onChangeText={text => setUpdate(text)}>{update}</TextInput>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(Notes);
          route.params.removeNote(route.params.data, route.params.index);
        }}>
        <Text>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          route.params.updateNote(route.params.data, update);
          navigation.navigate(Notes);
        }}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReadMore;
