import React from 'react';
import {View, Text} from 'react-native';


const NoteScrollView = ({item}) => {
  return (
    <View>
      <Text>{item}</Text>
    </View>
  );
};
export default NoteScrollView;
