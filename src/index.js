import React from 'react';
import { View } from 'react-native';
import AddTodo from './addTodo';
import ListTodo from './listTodo';

export default class Page extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AddTodo />
        <ListTodo />
      </View>     
    );
  }
}