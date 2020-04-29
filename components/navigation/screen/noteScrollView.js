import React from 'react';
import {View, Text, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {noteScrollViewStyle} from './style';


const NoteScrollView = ({item}) => {
  const {container, text} = noteScrollViewStyle;
  return (
      <View style={container}>
      <TouchableOpacity>
      <Text style={text}>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Delete</Text>
      </TouchableOpacity>
      </View>
  );
};
export default NoteScrollView;
