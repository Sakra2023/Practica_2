let nombre= prompt('Ingresa tu nombre: ')
let edad=parseInt(prompt('Ingresa tu edad: '))

if(edad>=18){
    document.write(`${nombre} eres mayor de edad con ${edad}, puedes ingresar a la disco`)
}else{
    document.write(`${nombre} eres menor de edad con ${edad}, no puedes ingresar a la discoteca por que eres muy joto`)
}