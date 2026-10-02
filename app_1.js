let numero= parseInt(prompt('Ingresa un numero: '))

let contador=1
document.write(`Tabla de multiplicar del ${numero}`, '<br>')
while (contador <=10){
    let res=numero * contador
    document.write(`${numero} * ${contador}= ${res}`, '<br>')
    contador= contador+1
}


document.write('<br>')
document.write('<br>')
document.write('<br>')

document.write('-------------------------------------------------------------------------------------','<br>')
let numero2= parseInt(prompt('Ingresa el numero para saber cuantas tablas necesitas: '))

let conta1=1

while (conta1<=numero2){
    document.write(`Tabla de multiplicar del ${conta1}`,'<br>')
    let conta2=2
    while(conta2<10){
        let res= conta1*conta2
        document.write(`${conta1} * ${conta2}= ${res}`,'<br>')
        conta2=conta2+1
    }
    conta1=conta1+1
}