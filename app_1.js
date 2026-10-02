let numero= parseInt(prompt('Ingresa un numero: '))

let contador=1
document.write(`Tabla de multiplicar del ${numero}`, '<br>')
while (contador <=10){
    let res=numero * contador
    document.write(`${numero} * ${contador}= ${res}`, '<br>')
    contador= contador+1
}