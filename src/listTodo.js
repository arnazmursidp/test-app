import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

class ListTodo extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            {this.props.todo.map((data, index) => {
                <Text>{data}</Text>
            })}
        </View>  
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapStateToProps = ({ todos }) => ({
    todo: todos
});

export default connect(mapStateToProps)(ListTodo);