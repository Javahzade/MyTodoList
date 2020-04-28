import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NoteList from './screen/noteList';
import Note from './screen/note';

const Stack = createStackNavigator();

export const MyStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Notes" component={NoteList} />
            <Stack.Screen name="Add notes" component={Note} />
        </Stack.Navigator>
    );
}