//Estructuras de flujo

//Condicionales

//IF
let edad = 10
if( edad >= 18 ){
    console.log(`Ya tienes ${edad}, claro que puedes pasar`)
}
else if( isNaN( edad ) ){
    console.log(`Debes ingresar un numero >:(`)
}else{
    console.log(`Apenas tienes ${edad}, claro que NO puedes pasar`)
}
//OPERADOR TERNARIO
let puedePasar = edad >= 18 ? `Ya tienes ${edad}, claro que puedes pasar` : `Apenas tienes ${edad}, claro que NO puedes pasar`
//SWITCH
let dia = 1
let diatexto
switch( dia ){
    case 1:
        diatexto = "Lunes"
        break
    case 2: 
        diatexto = "Martes"
        break
    case 3: 
        diatexto = "Miercoles"
        break
    case 4: 
        diatexto = "Jueves"
        break
    case 5: 
        diatexto = "Viernes"
        break
    case 6: 
        diatexto = "Sabado"
        break
    case 7: 
        diatexto = "Domingo"
        break
    default:
        diatexto = "DESCONOCIDO"
}
console.log( "Feliz " + diatexto )


/*
Operadores relacionales:

== Igual normal 5 == "5" true
=== Igual Estricto 5 === "5" false

!= Desigual normal 5 != 6 true
!== Desigual Estricto 5 != 6 false

> 
<

>=
<=

Operadores logicos:
&& and 

true && true  true
true && false  false
false && false  false

|| or

true || true  true
true || false  true
false || false  false

! not

!true  false
!false  true
*/