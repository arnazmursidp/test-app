import React from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';

class ListTodo extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            {todos.map((data, index) => {
                console.log("Data");
            })}
        </View>  
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: '1'
    }
});

const stateToProps = (state) => {
    todos: state.todos
}

export default connect(stateToProps)(ListTodo)