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
      delete state.noteText[action.index];
      delete state.filterNoteText[action.index];
      return {
        ...state,
        noteText: state.noteText.filter(a => {
          return typeof a !== 'undefined';
        }),
        filterNoteText: state.filterNoteText.filter(a => {
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
        ...state,
        filterNoteText: state.noteText.filter(search => {
          /* return state.noteText.indexOf(search) != -1; */
          if (action.filterNoteText == '') {
            return null;
          } else {
            return search.includes(action.filterNoteText) ? search : null;
          }
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
