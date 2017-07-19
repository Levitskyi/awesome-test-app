import React, { Component } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default class Splash extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Hello world!</Text>
                <Switch/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'red'
    }
});
