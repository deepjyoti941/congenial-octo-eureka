import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB0eBLNO-5RwIakMsC-bUpZOywPovsjn58',
      authDomain: 'react-employee-manager.firebaseapp.com',
      databaseURL: 'https://react-employee-manager.firebaseio.com',
      projectId: 'react-employee-manager',
      storageBucket: 'react-employee-manager.appspot.com',
      messagingSenderId: '713533005772'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Heloo!
          </Text>
        </View>
      </Provider>
    )
  }
}


export default App;
