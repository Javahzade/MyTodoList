import {StyleSheet} from 'react-native';

export const noteStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F7ED',
  },
  search: {
    flex: 1,
    margin: 5,
    borderWidth: 2,
    borderRadius: 20,
    fontSize: 20,
  },
  searchButton: {
    borderRadius: 50,
    position: 'absolute',
    top: 10,
    right: 20,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'tomato',
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  text: {
    fontSize: 80,
  },
});

export const noteTextStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE5D5',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7ec850',
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
  },
});

export const noteScrollViewStyle = StyleSheet.create({
  container: {
    backgroundColor: '#EFE5D5',
    padding: 10,
    margin: 5,
    marginBottom: 0,
    borderWidth: 2,
    borderRadius: 20,
  },
  text: {
    flex: 1,
    fontSize: 25,
    fontStyle: 'italic',
  },
});

export const readMoreStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE5D5',
  },
  saveButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7ec850',
    position: 'absolute',
    bottom: 20,
    right: 10,
  },
  deleteButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  text: {
    fontSize: 20,
    fontStyle: 'italic',
  },
});
