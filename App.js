import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomCamera from './src/Camera'
// import console = require('console');

const codeToTest = "#include <iostream> int main(void) { std::cout << \"Holy shit.\" << std::endl; }";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thisLoading: true,
      dataSource: null,
      response: 'Loading, please wait...',
      outputFromCode: '-',
      loadCamera: 'true',
      imageLoc: '',
    } 
  }

  confirmData(inputStr) {
    
  
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
          str: this.state.imageLoc,
        }), 
      }).then((res) => res.json())
        // .then((data) => {console.log('data', data.ParsedResults[0].ParsedText);  })
        .then((data) => { ret = this.confirmData(data.ParsedResults[0].ParsedText); 
            
          this.setState({ response: data.ParsedResults[0].ParsedText})})
        .catch((err) => console.log(err))
  } 

  handleClick() {
    return fetch('http://192.168.254.196:5000/api/getresults', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // str: "#include <iostream> int main(void) { std::cout << \"Holy shit.\" << std::endl; return 0;}",
        str: this.state.response,
      }),
    }).then((res) => res.json())
      // .then((data) => {console.log('data', data.ParsedResults[0].ParsedText);  })
      .then((data) => {
        ret = this.confirmData(data);
        console.log(data.output);
    
        Alert.alert("Your Glode Output: ", data.output);
      
        // this.setState({ outputFromCode: data.ParsedResults[0].ParsedText });
        // console.log(this.state.outputFromCode);
      })
      .catch((err) => console.log(err))
  }

  takePicture(uri) {
    console.log('takePicture called');
    this.setState({loadCamera: 'false'});
    console.log('image location from parent: ', uri)

  }

  render () {

    if (this.state.loadCamera === 'true')
    {
      return (
          <CustomCamera action={this.takePicture.bind(this)} imageLoc={this.imageLoc} />  
        // <View style={styles.container} >
        //    <Text>Tkae a picture</Text>
        // </View>
      );
    }
    else 
    {
      return (
        // <div></div>
        <View style={styles.container}>
          {/* <Text>{this.state.response}</Text>   */}
          {console.log(this.state.response)}

          <Icon.Button
            name="camera"
            backgroundColor="#841584"
            style={{ alignItems: 'center', }}
            onPress={
              () => {this.takePicture(); this.setState({loadCamera: !this.state.loadCamera})}

            }
          />

          <TextInput multiline
            style={{ width: 300, height: 600, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ response: text })}
            value={this.state.response}
          />
          <Button
            onPress={() => this.handleClick()}
            title="Glode!"
            style={{ width: 300 }}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
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
