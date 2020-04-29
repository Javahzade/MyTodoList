import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyStack} from './components/navigation/MyStack';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

export default App;
