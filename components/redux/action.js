export const addNoteText = text => {
  return {
    type: 'SAVE',
    noteText: text,
  };
};
