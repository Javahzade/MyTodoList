import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {noteScrollViewStyle} from '../style';

const NoteScrollView = ({item, index, readMore}) => {
  const {container, text} = noteScrollViewStyle;
  return (
    <TouchableOpacity style={container} onPress={() => readMore(item, index)}>
      <Text numberOfLines={2} style={text}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default NoteScrollView;
