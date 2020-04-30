import React from 'react';
import {SafeAreaView, TouchableOpacity, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {noteStyle} from '../style';
import NoteScrollView from './noteScrollView';
import {deleteNoteAction, editNoteAction} from '../../../redux/action';
import {STRINGS} from '../../../src/constants/index';

const NoteList = ({navigation, noteText, deleteNote, editNote}) => {
  const {container, button, text} = noteStyle;
  const {AddNotes, ReadNote} = STRINGS;
  const addNewNote = () => {
    navigation.navigate(AddNotes);
  };
  const readMore = (data, index) => {
    navigation.navigate(ReadNote, {data, index, removeNote, updateNote});
  };
  const removeNote = (item, index) => {
    deleteNote(item, index);
  };
  const updateNote = (previous, next) => {
    editNote(previous, next);
  };

  return (
    <SafeAreaView style={container}>
      <FlatList
        data={noteText}
        renderItem={({item}) => (
          <NoteScrollView
            item={item}
            index={noteText.indexOf(item)}
            readMore={readMore}
            removeNote={removeNote}
          />
        )}
      />
      <TouchableOpacity style={button} onPress={addNewNote}>
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

const mapDispatchToProps = dispatch => {
  return {
    deleteNote(item, index) {
      dispatch(deleteNoteAction(item, index));
    },
    editNote(previous, next) {
      dispatch(editNoteAction(previous, next));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
