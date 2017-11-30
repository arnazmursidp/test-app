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

// import React from 'react';
// import { FlatList, View, StyleSheet } from 'react-native';
// import { connect } from 'react-redux';

// class ListTodo extends React.Component {
//   render() {
//     return (
//         <View style={styles.container}>
//             {this.props.todo.map((data, index) => {
//                 console.log("Data", data);
//             })}
//         </View>  
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1
//     }
// });

// const mapStateToProps = ({ todos }) => {
//     todo: todos
// }

// export default connect(mapStateToProps, null)(ListTodo);