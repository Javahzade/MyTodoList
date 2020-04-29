import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {saveNoteAction} from '../../../redux/action';
import {noteTextStyle} from '../style';
import {ScrollView} from 'react-native-gesture-handler';
import {STRINGS} from '../../../src/constants/index';

const Note = ({navigation, saveNote}) => {
  const [noteText, setNoteText] = useState('');
  const {container, text, button} = noteTextStyle;
  const {Notes, Type} = STRINGS;
  const saveAndGo = () => {
    if (noteText !== '') {
      saveNote(noteText);
      navigation.navigate(Notes);
    }
  };

  return (
    <SafeAreaView style={container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <TextInput
            style={text}
            maxLength={200}
            multiline={true}
            onChangeText={type => setNoteText(type)}
            placeHolder={Type}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <TouchableOpacity style={button} onPress={saveAndGo}>
        <Text style={text}>✓</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    saveNote: text => dispatch(saveNoteAction(text)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Note);
