import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {addNoteText} from '../../redux/action';
import {noteTextStyle} from './style';

const Note = ({navigation, addNoteText}) => {
  const [noteText, setNoteText] = useState('');
  const {text, button} = noteTextStyle;
  const saveAndGo = () => {
    addNoteText(noteText);
    navigation.navigate('Notes');
  };

  return (
    <View>
      <TextInput
        onChangeText={text => setNoteText(text)}
        placeHolder="Type your Note"
      />
      <TouchableOpacity onPress={saveAndGo} style={button}>
        <Text style={text}>✓</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addNoteText: text => dispatch(addNoteText(text)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Note);
