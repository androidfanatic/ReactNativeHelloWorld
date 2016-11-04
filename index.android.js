// Hello World App - the ancient traditions of our people

import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

class ReactNativeHelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
    	   <Text style={styles.hello}>
          Hello World!
         </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  hello: {
    fontSize: 40,
    textAlign: 'center',
    color: '#aaaaaa'
  },
});

AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);