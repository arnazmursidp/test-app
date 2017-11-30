import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class AddTodo extends React.Component {
  render() {
    var texts = '';
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Enter Your Todo"
                    style={styles.input}
                    onChangeText={(text) => texts = text }
                />
                <TouchableOpacity 
                    style={{ marginTop: 20, marginLeft: 10, backgroundColor: 'black' }}
                    onPress={() => {}}
                >
                    <Text style={{ color: 'white', padding: 15 }}>Submit</Text>
                </TouchableOpacity>
            </View>
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