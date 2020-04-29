import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

let initialState = {
  noteText: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE':
      return {
        ...state,
        noteText: [action.noteText, ...state.noteText],
      };
    case 'DELETE':
      console.log(state.noteText.indexOf(action.noteText));
      delete state.noteText[action.index];
      console.log('ACTION INDEX ==>' + action.index);
      return {
        ...state,
        noteText: state.noteText,
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
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
export const pReducer = persistReducer(persistConfig, reducer);
