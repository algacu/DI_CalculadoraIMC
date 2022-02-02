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
                    maxLength={5}
                    keyboardType='numeric'
                    value={this.state.peso}
                    onChangeText={this.actualizaPeso}
                />
                <Text style={styles.subtitulo}>Altura</Text>
                <TextInput style={styles.input}
                    placeholder='Introduce tu altura (m)'
                    maxLength={4}
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