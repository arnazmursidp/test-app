import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { helloSaga } from './sagas';
import createSagaMiddleware from 'redux-saga';
import Page from './src/index';
import todos from './src/reducersss/todos';

const reducer = combineReducers({
  todos
});

const sagaMiddleware = createSagaMiddleware;

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Page />
        </Provider>    
    );
  }
}
