import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, Button } from 'react-native';
// import console = require('console');

const codeToTest = "#include <iostream> int main(void) { std::cout << \"Holy shit.\" << std::endl; }";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thisLoading: true,
      dataSource: null,
      response: 'loaaaaading',
    } 
  }

  confirmData(inputStr) {
    // Works on both iOS and Android
  
  }

  componentDidMount() {
      var ret;
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
        // .then((data) => {console.log('data', data.ParsedResults[0].ParsedText);  })
        .then((data) => { ret = this.confirmData(data.ParsedResults[0].ParsedText); 
            
          this.setState({ response: data.ParsedResults[0].ParsedText})})
        .catch((err) => console.log(err))
  } 

  handleClick() {
    console.log("Button clicked");
  }

  render () {
    
      return (
        // <div></div>
        <View style={styles.container}>
          {/* <Text>{this.state.response}</Text>   */}
          {console.log(this.state.response)}
          <TextInput multiline
            style={{ width: 300, height:600, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ response: text })}
            value={this.state.response}
          />       
          <Button
            onPress={() => this.handleClick()} 
            title="Glode!" 
            style={{width: 300}}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> 
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
