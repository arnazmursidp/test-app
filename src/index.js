import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Page extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <TextInput
            underlineColorAndroid="transparent"
            placeholder="Enter Your Todo"
            style={styles.input}
        />
        <TouchableOpacity 
            style={{ marginTop: 20, marginLeft: 10, backgroundColor: 'black' }}
            onPress={() => {}}
            >
            <Text style={{ color: 'white', padding: 15 }}>Submit</Text>
        </TouchableOpacity>
        </View>  
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    input: {
        marginTop: 20,
        width: '70%',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black'
    }
});