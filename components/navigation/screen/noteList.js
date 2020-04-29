import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {noteStyle} from './style';
import NoteScrollView from './noteScrollView';

const NoteList = ({navigation, noteText}) => {
  const {container, button, text} = noteStyle;
  const addNewNote = () => {
    navigation.navigate('Add notes');
    console.log(noteText);
  };
  return (
    <SafeAreaView style={container}>
      <FlatList
        data={noteText}
        renderItem={({item}) => <NoteScrollView item={item} />}
      />
      <TouchableOpacity onPress={addNewNote} style={button}>
        <Text style={text}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    noteText: state.noteText,
  };
};

export default connect(
  mapStateToProps,
  null,
)(NoteList);
