/*En esta carpeta encontramos varias funciones que son llamadas desde el componente "Datos" y que también 
servirían para otros componentes en caso de que se amplie la aplicación en un futuro (calcular el IMC con otras medidas
y clasificar dichos resultados, etc.)*/


export const calcular = (peso, altura) => {
    let pesoNum = parseFloat(peso)
    let alturaNum = parseFloat(altura)
    let resultado = pesoNum / Math.pow(alturaNum,2);
    return resultado
}

export const clasificar = (resultado) => {
    switch (true) {
        case (resultado < 18.5):
            return 'Peso insuficiente' + '-' + 'green';
        case (resultado >= 18.5 && resultado <= 24.99):
            return 'Normopeso' + '-' + 'green';
        case (resultado >= 25 && resultado <= 26.99):
            return 'Sobrepeso grado I' + '-' + 'green';
        case (resultado >= 27 && resultado <= 29.99):
            return 'Sobrepeso grado II (preobesidad)' + '-' + 'orange';
        case (resultado >= 30 && resultado <= 34.99):
            return 'Obesidad de tipo I' + '-' + 'orange';
        case (resultado >= 35 && resultado <= 39.99):
            return 'Obesidad de tipo II' + '-' + 'orange';
        case (resultado >= 40 && resultado <= 49.99):
            return 'Obesidad de tipo III (mórbida)' + '-' + 'red';
        case (resultado >= 50):
            return 'Obesidad de tipo IV (extrema)' + '-' + 'red';
        default:
            return 'Error';
    }
}

/*Las funciones 'validarAltura' y 'validarPeso' se encargan de reemplazar 
las comas por puntos, en caso de que el usuario introduzca los datos de esa manera,
para asegurar el cálculo correcto.*/

export const validarAltura = (cifra) => {
    let num = 0;

    if (cifra.includes(',')) {
        num = cifra.replace(',','.')
        cifra = num;
    }

    return cifra;
}

export const validarPeso = (cifra) => {
    let num = 0;

    if (cifra.includes(',')){
        num = cifra.replace(',','.')
        cifra = num;
    }

    return cifra;
}