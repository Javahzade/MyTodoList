import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

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
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
export const pReducer = persistReducer(persistConfig, reducer);
