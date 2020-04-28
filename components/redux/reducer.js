let initialState = {
    noteText: '',
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'SAVE':
            return {
                ...state,
                noteText: action.noteText,
            };
        default:
            return state;
    }
}