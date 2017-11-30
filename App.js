import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import reducer from './src/reducers';
import Page from './src/index';

export default class App extends React.Component {
  render() {
    return (
      <Page />
    );
  }
}
