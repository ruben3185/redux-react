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