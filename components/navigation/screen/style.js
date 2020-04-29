import {StyleSheet} from 'react-native';

export const noteStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: 'tomato',
  },
  text: {
    fontSize: 80,
    color: 'white',
  },
});

export const noteTextStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 20,
    backgroundColor: '#7ec850',
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
});

export const noteScrollViewStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    margin: 5,
  },
  text: {
    fontSize: 25,
  },
  editor: {

  },

});
