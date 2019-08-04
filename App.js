import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
// import console = require('console');

const codeToTest = "#include <iostream> int main(void) { std::cout << \"Holy shit.\" << std::endl; }";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thisLoading: true,
      dataSource: null,

    }
  }

  // componentDidMount() {

  //   return fetch ('/api/string')

  // }


  componentDidMount() {
      return fetch('http://192.168.254.196:5000/api/string', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          str: "#include <iostream> int main(void) { std::cout << \"Holy shit.\" << std::endl; return 0;}",
        }),
      }).catch((error) => {
        console.error(error);
      });
  } 
    // return fetch('192.168.254.196:5000/', {

    // })

  // componentDidMount() {
  //   return fetch('/api/string')
  //     .then((response) => response.json())
  //     .then((responseHiyaJson) => {

  //       this.setState({
  //         // isLoading: false,
  //         // dataSource: responseJson.movies,
  //       }, function () {

  //       });

  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  render () {
    return (
      // <div></div>
      <View style={styles.container}>
        <Text>sup</Text>
        
        
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
