export const saveNoteAction = text => {
  return {
    type: 'SAVE',
    noteText: text,
  };
};

export const deleteNoteAction = (item, index) => {
  return {
    type: 'DELETE',
    noteText: item,
    index,
  };
};

export const editNoteAction = (previous, next) => {
  return {
    type: 'EDIT',
    previous,
    next,
  };
};

export const filterNoteListAction = search => {
  return {
    type: 'FILTER',
    filterNoteText: search,
  }
}