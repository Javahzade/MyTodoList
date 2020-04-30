import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

let initialState = {
  noteText: [],
  filterNoteText: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE':
      return {
        ...state,
        noteText: [action.noteText, ...state.noteText],
      };
    case 'DELETE':
      console.log(action)
      delete state.noteText[action.index];
      return {
        ...state,
        noteText: state.noteText.filter(a => {
          return typeof a !== 'undefined';
        }),
      };

    case 'EDIT':
      return {
        ...state,
        noteText: state.noteText.map(item => {
          if (item === action.previous) {
            return action.next;
          }
          return item;
        }),
      };
    case 'FILTER':  
    return {
        filterNoteText: state.noteText.filter(search => {
            return state.noteText.indexOf(search) != -1
          }),
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
export const pReducer = persistReducer(persistConfig, reducer);
