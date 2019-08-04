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
      response: 'loading',
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
          // str: "#include <iostream> int main(void) { std::cout << \"Holy shit.\" << std::endl; return 0;}",
          str: '#include <iostream> \nint main(void) {std:: cout << "Holy shit." << std:: endl; return 0; }'
        }),
      }).then((res) => res.json())
        .then((data) => {console.log('data',data.output); this.setState({response:data.output})})
        .catch((err) => console.log(err))
  } 

  render () {
    if (this.state.response === 'loading')
    {
      return (
        // <div></div>
        <View style={styles.container}>
          <Text>danggg</Text>
        </View>
      );
      
    }
    else 
    {
      return (
        // <div></div>
        <View style={styles.container}>
          <Text>{this.state.response}</Text>         
        </View>
      );
      
    }
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
