/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// Hello World App - the ancient traditions of our people

import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';

class ReactNativeHelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
	<Text style={styles.hello}>Hello World!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  hello: {
    fontSize: 40,
    textAlign: 'center',
    color: '#aaaaaa'
  },
});

AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);

