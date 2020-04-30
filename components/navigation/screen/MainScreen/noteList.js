import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  Button,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {noteStyle} from '../style';
import NoteScrollView from './noteScrollView';
import {
  deleteNoteAction,
  editNoteAction,
  filterNoteListAction,
} from '../../../redux/action';
import {STRINGS} from '../../../src/constants/index';

const NoteList = ({
  navigation,
  noteText,
  filterNoteText,
  deleteNote,
  editNote,
  filterNote,
}) => {
  const [searchArr, setSearchArr] = useState('');
  const noteData = noteText;
  const filterData = filterNoteText;
  const [data, setData] = useState(noteData);
  const {container, search, searchButton, button, text} = noteStyle;
  const {AddNotes, ReadNote, Search_Type} = STRINGS;

  useEffect(() => {
    if (filterNoteText == '') {
      setData(noteData);
    } else {
      setData(filterData);
    }
  }, [filterNoteText, noteData, filterData]);

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
  const isSearchPressed = () => {
    filterNote(searchArr);
    setSearchArr('');
  };

  return (
    <SafeAreaView style={container}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          style={search}
          maxLength={30}
          onChangeText={type => setSearchArr(type)}
          value={searchArr}
          placeholder={Search_Type}
        />
        <TouchableOpacity style={searchButton} onPress={isSearchPressed}>
          <Text style={{fontSize: 30}}>🔍</Text>
        </TouchableOpacity>
      </View>

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
        keyExtractor={index => index}
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
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoteList);
