import React from 'react'
import { connect } from "react-redux"

const Titulares = ({titulares, quitarTitular}) => (
    <section>
        <h1>Titulares</h1>
        <div className='cancha'>
            {
                titulares.map(j => (
                    <article className='Titulares' key={j.id}>
                            <img src={j.foto} alt={j.nombre} />
                            <button onClick={() => quitarTitular(j)}>x</button>
                        <p>{j.nombre}</p>
                    </article>
                ))
            }

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