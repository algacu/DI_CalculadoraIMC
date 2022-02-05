import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Title, Text } from 'react-native-paper'
import { calcular, clasificar, validarAltura, validarPeso } from '../utils/Utils'

export class Datos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peso: '',
            altura: '',
            resultadoNum: '',
            resultado: '',
            color: 'red',
        }
    }

    actualizaPeso = (unPeso) => {
        this.setState({ peso: unPeso })
    }

    actualizaAltura = (unaAltura) => {
        this.setState({ altura: unaAltura })
    }

    actualizaResultado = (unResultado) => {
        this.setState({ resultado: unResultado})
    }

    actualizaResultadoNum = (unResultado) => {
        this.setState({ resultadoNum: unResultado})
    }

    actualizaColor = (unColor) => {
        this.setState({ color: unColor })
    }

    /* La función 'procesar' sirve como "lanzador" porque ejecuta varios procesos 
    relacionados con el cálculo del IMC, asignando datos a variables e instanciando otras
    funciones (localizadas en el archivo Utils.js incluido en la carpeta homónima)que validan 
    dichos datos (comprobando que el formato sea correcto), realizan las operaciones necesarias
    para el cálculo del IMC y clasifican los resultados obtenidos. Finalmente, se "setean" los 
    resultados obtenidos en los estados, con varios formatos de presentación (número, texto y color).*/
    
    procesar = () => {

        let peso = this.state.peso;
        let altura = this.state.altura;

        let alturaFormateada = validarAltura(altura);
        let pesoFormateado = validarPeso(peso);

        let resultadoNum = calcular(pesoFormateado, alturaFormateada);

        let resultadoClasificado = clasificar(resultadoNum);

        let resultadoClasificadoArray = resultadoClasificado.split('-');

        this.actualizaResultadoNum(resultadoNum.toFixed(2));
        this.actualizaResultado(resultadoClasificadoArray[0]);
        this.actualizaColor(resultadoClasificadoArray[1]);
    }

    render() {
        return (
            <View style={styles.container}>
                <Title style={styles.titulo}>Datos</Title>
                <Text style={styles.subtitulo}>Peso</Text>
                <TextInput style={styles.input}
                    placeholder='Introduce tu peso (kg)'
                    maxLength={5} //La longitud máxima se establece en 5 para permitir la inclusión del peso (2 cifras), un punto (o coma) y 2 decilames.
                    keyboardType='numeric'
                    value={this.state.peso}
                    onChangeText={this.actualizaPeso}
                />
                <Text style={styles.subtitulo}>Altura</Text>
                <TextInput style={styles.input}
                    placeholder='Introduce tu altura (m)'
                    maxLength={4} //La longitud máxima se establece en 4 para permitir la inclusión del metro (1 cifra), un punto (o coma) y 2 decilames.
                    keyboardType='numeric'
                    value={this.state.altura}
                    onChangeText={this.actualizaAltura}
                />
                <Button style={styles.boton}
                    icon="calculator-variant"
                    mode="contained"
                    color='#2b2d42'
                    onPress={this.procesar}>
                    Calcular IMC
                </Button>
                <Text style={styles.subtitulo}>Resultado:</Text>
                <Text style={{color:this.state.color}}>{this.state.resultadoNum + '  ' + this.state.resultado}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#edf2f4',
        borderRadius: 10,
    },
    titulo: {
        fontSize: 22,
        paddingLeft: 5,
        marginBottom: 15,
    },
    subtitulo: {
        fontSize: 16,
    },
    input: {
        marginTop: 5,
        marginBottom: 10,
        borderBottomColor: '#2b2d42',
        borderBottomWidth: 1,
        fontSize: 14,
    },
    boton: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
    }

});