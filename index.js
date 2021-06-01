arrays = [
    "Juan",
    "Colo",
    "Simón",
]
obj = {
    juan: {
        nombre: "Juan",
        apellido: "Arango",
        edad: 15,
        TI: 12345678910
    },
    colo: {
        nombre: "Samuel",
        apellido: "Colorado",
        edad: 15,
        TI: 10987654321
    },
    simon: {
        nombre: "Simón",
        apellido: "Posada",
        edad: 15,
        TI: 24681097531
    }
}

let persona1 = {
    nombre: "Jhon",
    apellido: "Doe"
}

let persona2 = {...persona1}
persona2.nombre = "Jane"
console.table({ persona1, persona2 })

const constructorPeronas = ( nombre, apellido ) => {
    return {
        nombre,
        apellido,
        presentarse: function(){
            console.log(`Hola, mi nombre es ${ this.nombre } ${ this.apellido }`)
        }
    }
}