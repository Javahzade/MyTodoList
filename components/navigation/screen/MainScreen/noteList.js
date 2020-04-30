import React, {useState, useEffect} from 'react';
import {SafeAreaView, TouchableOpacity, Text, TextInput, FlatList, Button} from 'react-native';
import {connect} from 'react-redux';
import {noteStyle} from '../style';
import NoteScrollView from './noteScrollView';
import {deleteNoteAction, editNoteAction, filterNoteListAction} from '../../../redux/action';
import {STRINGS} from '../../../src/constants/index';

const NoteList = ({navigation, noteText, filterNoteText, deleteNote, editNote, filterNote}) => {
  const [searchArr, setSearchArr] = useState('');
  const noteData = noteText;
  const filterData = filterNoteText;
  const [data, setData] = useState(noteData);
  const {container, search, button, text} = noteStyle;
  const {AddNotes, ReadNote, Search_Type} = STRINGS;

  useEffect(() => {
    if (filterNoteText == ''){
      console.log('NoteText')
      setData(noteData)
    }else {
      console.log('FILTER')
      setData(filterData)
    }
  })

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
  const isSearchPressed = (searchArr) => {
    filterNote(searchArr)  
  }
  
  console.log(data)
  return (
    <SafeAreaView style={container}>
      <TextInput
      style={search}
      onChangeText={type => setSearchArr(type)}
      placeholder={Search_Type}
      >
      </TextInput>
      <Button title='search' onPress={isSearchPressed} />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <NoteScrollView
            item={item}
            index={noteText.indexOf(item)}
            readMore={readMore}
            removeNote={removeNote}
          />
        )}
        keyExtractor={item => item.id}
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
    filterNoteText: state.filterNoteText,
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
    filterNote(search) {
      dispatch(filterNoteListAction(search));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
