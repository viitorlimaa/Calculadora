addCaracter = (numero) => {

    const display = document.querySelector('.display').value

    document.querySelector('.display').value = display + numero
}


limpaTela = () => {

    document.querySelector('.display').value = ""
}

calcular = () => {

    const display = document.querySelector('.display').value

    document.querySelector('.display').value = eval(display)
}

inverterNumero = () => {

    const display = document.querySelector('.display').value

    document.querySelector('.display').value = display * -1
}