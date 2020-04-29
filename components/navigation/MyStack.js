import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NoteList from './screen/MainScreen/noteList';
import Note from './screen/AddNoteScreen/note';
import ReadMore from './screen/ReadMoreScreen/readMore';
import {STRINGS} from '../src/constants/index';

const Stack = createStackNavigator();

export const MyStack = () => {
  const {Notes, AddNotes, ReadNote} = STRINGS;
  return (
    <Stack.Navigator>
      <Stack.Screen name={Notes} component={NoteList} />
      <Stack.Screen name={AddNotes} component={Note} />
      <Stack.Screen name={ReadNote} component={ReadMore} />
    </Stack.Navigator>
  );
};

export default MyStack;
