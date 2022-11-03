function calculando(){
    var operador = (document.getElementById('coperador').value)
    let numero1 = parseInt(document.getElementById('cnumero1').value);
    let numero2 = parseInt(document.getElementById('cnumero2').value);
    let resultado

    switch(operador) {
        case 'soma':
            resultado = parseInt(numero1) + parseInt(numero2);
            break;
        case 'diminuir':
            resultado = parseInt(numero1) - parseInt(numero2);
            break;
        case 'multiplicar':
            resultado = parseInt(numero1) * parseInt(numero2);
            break;
        case 'dividir':
            resultado = parseInt(numero1) / parseInt(numero2);
            break;
    }
    document.getElementById('cresultado').value = resultado
}
