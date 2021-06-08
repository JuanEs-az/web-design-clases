/*
Cuando se presione el botón btn-guardar:
1. Se guarde el dato del input
2. Se borra el dato del input
3. Añadir el dato tomado a la lista

Cuando se presione el botón btn-limpiar:
1. Se borra el input
2. Se borra la lista
*/
//Variables
const campotexto = document.getElementById("campotexto")
const btnLimpiar = document.querySelector("#btn-limpiar")
const btnGuardar = document.querySelector("#btn-guardar")
const listado = document.querySelector("#listado")
const listaNombres = localStorage["listado"] ? JSON.parse(localStorage["listado"]) : []


//Funciones
const limpiar = () => {
    campotexto.value = ""
    listado.innerHTML = ""
    localStorage["listado"] = '[]'
}

const actualizarListado = ( arr ) => {
    campotexto.value = ""
    listado.innerHTML = ""
    arr.forEach(nombre => {
        const elemento = document.createElement("li")
        elemento.classList.add("list-group-item")
        elemento.innerText = nombre
        listado.appendChild( elemento )
    });
} 

const guardar = () => {
    //Guardamos el dato
    const valortexto = campotexto.value
    if(valortexto == ''){
        return 0
    }
    //Limpiamos el dato del input
    campotexto.value = ""
    //Guardarlo en la lista
    listaNombres.push( valortexto )
    listaNombres.sort()
    actualizarListado( listaNombres )
    localStorage["listado"] = JSON.stringify( listaNombres )

}

const hackSpam = (nombre, cantidad) => {
    for(let i = 1; i <= cantidad; i++){
        campotexto.value = nombre
        guardar()
    }}

//Eventos
btnGuardar.addEventListener("click", guardar)
btnLimpiar.addEventListener("click", limpiar)
document.addEventListener("keypress", ( event ) => {
    if( event.keyCode === 13){
        guardar()
    }
} )

//Lineas imperativas
actualizarListado( listaNombres )
