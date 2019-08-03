import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import console = require('console');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  componentWillMount() {
    fetch('/api/string', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        test: 'TestMessage',
      }),
    });
  }

  render () {
    return (
      // <div></div>
      <View style={styles.container}>
        <Text>Hiya</Text>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
