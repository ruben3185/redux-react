import React from 'react'
import { connect } from "react-redux"
import cancha from "../cancha.svg"

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h1>Titulares</h1>
        <div className='cancha'>
            {
                titulares.map(j => (
                    <article className="titular" key={j.id}>
                        <div>
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => quitarTitular(j)}>x</button>
                        </div>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }
            <img src={cancha} alt="Cancha de futbol" />
        </div>
    </section>
)

const mapStateToProps = state => ({
    titulares: state.titulares
})

const mapDispatchProps = dispatch => ({
    quitarTitular(jugador){
        dispatch({
            type:"QUITAR_TITULAR",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchProps)(Titulares)