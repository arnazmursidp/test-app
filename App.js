import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Page from './src/index';
import todos from './src/reducersss/todos';

const reducer = combineReducers({
  todos
});

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Page />
        </Provider>    
    );
  }
}
