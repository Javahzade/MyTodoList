import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {STRINGS} from '../../../src/constants/index';
import {readMoreStyle} from '../style';

const ReadMore = ({navigation, route}) => {
  const [update, setUpdate] = useState(route.params.data);
  const {container, saveButton, deleteButton, text} = readMoreStyle;
  const {Notes} = STRINGS;
  return (
    <SafeAreaView style={container}>
      <KeyboardAvoidingView>
        <ScrollView>
          <TextInput
            style={text}
            maxLength={200}
            multiline={true}
            onChangeText={type => setUpdate(type)}>
            {update}
          </TextInput>
        </ScrollView>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={deleteButton}
        onPress={() => {
          navigation.navigate(Notes);
          route.params.removeNote(route.params.data, route.params.index);
        }}>
        <Text style={{fontSize: 40}}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={saveButton}
        onPress={() => {
          route.params.updateNote(route.params.data, update);
          navigation.navigate(Notes);
        }}>
        <Text style={{fontSize: 40}}>✓</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ReadMore;
