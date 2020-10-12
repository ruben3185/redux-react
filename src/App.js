import React from 'react';
import  { Provider } from 'react-redux';
import Jugadores  from './componentes/Jugadores';
import EquipoSeleccionado from './componentes/EquipoSeleccionado';
import store from './store'

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
