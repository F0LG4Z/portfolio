import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store.js'

import App from './App.jsx'
import Sobre from './pages/Sobre.jsx'
import Projetos from './features/projetos/components/Projetos.jsx'
import Contacto from './features/contacto/components/Contacto.jsx'
import Inicio from './pages/Inicio.jsx'
import ProjetoVideo from './features/projetos/components/ProjetoVideo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}> 
          <Route index element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/video/:id' element={<ProjetoVideo />} />
          <Route path='/contacto' element={<Contacto />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
