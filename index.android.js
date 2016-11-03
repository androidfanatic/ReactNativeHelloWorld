// Hello World App - the ancient traditions of our people

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class ReactNativeHelloWorld extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('ReactNativeHelloWorld', () => ReactNativeHelloWorld);
