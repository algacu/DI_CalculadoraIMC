import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, TextInput, Title, Text } from 'react-native-paper'

export class Datos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            peso: '',
            altura: '',
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

    actualizaColor = (unColor) => {
        this.setState({ color: unColor })
    }

    calcular = () => {

        let altura = this.state.altura;
        let num1 = 0;
        let num2 = 0;

        if (!altura.includes('.')) {
            if (altura.includes(',')){
                let num1 = altura.replace(',','.')
                altura = num1;
            } else {
                num1 = altura.slice(0, 1);
                num2 = altura.slice(1,);
                altura = num1 + '.' + num2;
            }
        }

        let pesoNum = parseFloat(this.state.peso)
        let alturaNum = parseFloat(altura)

        let resultado = pesoNum / Math.pow(alturaNum,2);

        this.clasificar(resultado);
    }

    clasificar = (unResultado) => {
        switch (true) {
            case (unResultado < 18.5):
                this.actualizaResultado('Peso insuficiente');
                this.actualizaColor('green');
                break;
            case (unResultado >= 18.5 && unResultado <= 24.9):
                this.actualizaResultado('Normopeso')
                this.actualizaColor('green');
                break;
            case (unResultado >= 25 && unResultado <= 26.9):
                this.actualizaResultado('Sobrepeso grado I')
                this.actualizaColor('green');
                break;
            case (unResultado >= 27 && unResultado <= 29.9):
                this.actualizaResultado('Sobrepeso grado II (preobesidad)')
                this.actualizaColor('orange');
                break;
            case (unResultado >= 30 && unResultado <= 34.9):
                this.actualizaResultado('Obesidad de tipo I')
                this.actualizaColor('orange');
                break;
            case (unResultado >= 35 && unResultado <= 39.9):
                this.actualizaResultado('Obesidad de tipo II')
                this.actualizaColor('orange');
                break;
            case (unResultado >= 40 && unResultado <= 49.9):
                this.actualizaResultado('Obesidad de tipo III (mórbida)')
                this.actualizaColor('red');
                break;
            case (unResultado >= 50):
                this.actualizaResultado('Obesidad de tipo IV (extrema)')
                this.actualizaColor('red');
                break;
            default:
                this.actualizaResultado('Error')
                break;
        }

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
                    onPress={this.calcular}>
                    Calcular IMG
                </Button>
                <Text style={styles.subtitulo}>Resultado:</Text>
                <Text style={{color:this.state.color}}>{this.state.resultado}</Text>
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