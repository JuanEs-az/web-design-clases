/*
Cuando se presione el botón btn-guardar:
1. Se guarde el dato del input
2. Se borra el dato del input
3. Añadir el dato tomado a la lista

Cuando se presione el botón btn-limpiar:
1. Se borra el input
2. Se borra la lista
*/
const campotexto = document.getElementById("campotexto")
const btnLimpiar = document.querySelector("#btn-limpiar")
const btnGuardar = document.querySelector("#btn-guardar")
const listado = document.querySelector("#listado")
const listaNombres = []

const limpiar = () => {
    campotexto.value = ""
    listado.innerHTML = ""
}

const actualizarListado = ( arr ) => {
    limpiar()
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
    //Limpiamos el dato del input
    campotexto.value = ""
    //Guardarlo en la lista
    listaNombres.push( valortexto )
    listaNombres.sort()
    actualizarListado( listaNombres )
}
btnGuardar.addEventListener("click", guardar)
btnLimpiar.addEventListener("click", limpiar)

const hackSpam = (nombre, cantidad) => {
    for(let i = 1; i <= cantidad; i++){
        campotexto.value = nombre
        guardar()
    }}