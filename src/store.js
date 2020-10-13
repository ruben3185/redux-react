import { createStore } from "redux"

const initialSatate = {
    jugadores: [
        {
            id:1,
            nombre: "David Opina",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/d/dav/large/21125.png"
        },
        {
            id:2,
            nombre: "Yerry Mina",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/y/yer/large/29042.png"
        },
        {
            id:3,
            nombre: "James Rodriguez",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/j/jam/large/21041.png"
        },
        {
            id:4,
            nombre: "Santiago Arias",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/s/san/large/23493.png"
        },
        {
            id:5,
            nombre: "Falcao",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/f/fal/large/18411.png"
        },
        {
            id:6,
            nombre: "Guillermo Cuadrado",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/c/cua/large/21327.png"
        },
        {
            id:7,
            nombre: "Wilmar Barrios",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/w/wil/large/28894.png"
        },
        {
            id:8,
            nombre: "Duván Zapata",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/d/duv/large/23056.png"
        },
        {
            id:9,
            nombre: "Luis Muriel",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/l/lui/large/19306.png"
        },
        {
            id:10,
            nombre: "Cristian Zapata",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/z/zap/large/19361.png"
        },
        {
            id:11,
            nombre: "Luis Díaz",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/l/lui/large/40503.png"
        },
        {
            id:12,
            nombre: "Roger Martínez",
            foto: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/r/rog/large/34153.png"
        }
    ],
    titulares: [ ], 
    suplentes: []

}

const reducerEntrenador = (state=initialSatate, action) => {
    if (action.type === "AGREGAR_TITULAR"){
        return {
            ...state, 
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id  !== action.jugador.id)
        }

    }

    if (action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state, 
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id  !== action.jugador.id)
        }

    }

    if (action.type === "QUITAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)