

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput, Title, Text} from 'react-native-paper'
import {Datos} from './components/Datos'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.titulo}>Calculadora IMC</Title>
        <View>
          <Datos/>
        </View>
        <Text style={styles.pie}>Alejandro García Cuesta - Desarrollo de Interfaces (2º DAM)</Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#2b2d42',
  },
  titulo: {
    color: 'white',
    marginTop: 40,
    textAlign: 'center',
    fontSize: 30,
  },
  pie: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 10,
    margin: 10,
  }

});

export default App;
