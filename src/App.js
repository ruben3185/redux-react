import React from 'react';
import  { Provider } from 'react-redux';
import Jugadores  from './components/Jugadores';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import store from './store'
import "./styles/styles.scss"

const App = () => (

  <main>
    <Provider store={store}>
      <h1>ED-Manager</h1>
        <Jugadores/>
        <EquipoSeleccionado/>
    </Provider>
  </main>
)

export default App;
