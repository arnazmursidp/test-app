import React from 'react';
import AddTodo from './addTodo';
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

export default class Page extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <AddTodo />
        </Provider>    
    );
  }
}