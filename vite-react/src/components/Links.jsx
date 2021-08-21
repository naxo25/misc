import React, { useState } from 'react'
import Home from './Home'
import logo from '../img/logo.svg'
import logo2 from '../img/vue2.png'
import logo3 from '../img/js.webp'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const links = [{ name:'Acerca de', to: '/Tutoriales/web/', ico: 'logo-react.svg', desc: 'Esta página fue hecha con un router y estados globales propios' },
    { name:'Linux', to: '/Tutoriales/web/Linux', ico: 'linux.svg', desc:'Comandos de linux que uso' },
    { name:'Arch Linux', to: '/Tutoriales/web/Arch_Linux', ico: 'arch-linux.png', ext: '.png', desc:'Instalación' },
    { name:'JavaScript', to: '/Tutoriales/web/JavaScript', ico: 'code.svg', desc:'desde api en heroku' },
    { name:'Github', to: '/Tutoriales/web/Github', ico: 'github.svg', desc: 'Comandos git' },
    { name:'Variables de entorno', to: '/Tutoriales/web/Variables_de_entorno', ico: 'windows.svg', desc: 'Configuración variables de entorno' },
    { name:'Herramientas informaticas', to: '/Tutoriales/web/Herramientas', ico: 'settings-outline.svg', desc: 'sitios, apis' },
    { name:'Sublime Text', to: '/Tutoriales/web/Sublime', ico: 'code.svg', desc:'Configuración' },
    // { name:'Mi Virtual Scroll', to: '/Tutoriales/web/MiVirtual', ico: 'linux.svg', desc:'mi version con Js' }
]

const Links = () => {

  const [ruta, setruta] = useState()

  const handleClick = () => {
    setruta(location.pathname)
  }

  const getImg = (ico) => './icons/'+ ico

  return (
    <Router>
      <div className='Cont-links'>
        <ul>
          {/*<img src={'https://iconape.com/wp-content/png_logo_vector/cib-vue-js.png'} className="App-logo" alt="logo" />*/}
          <img src={logo2} className="App-logo " alt="logo" />
          <img src={logo} className="App-logo React" alt="logo" />
          <img src={logo3} className="App-logo" alt="logo" />
          <h4>Tutoriales</h4> 
          {
            links.map((link,key) => (
              <li key={key}>
                <img src={getImg(link.ico)} alt="" />
                <Link
                  className="App-link"
                  to={link.to}
                  onClick={handleClick}
                  rel="noopener noreferrer"
                >
                  { link.name }
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      <Switch>
        <Route path="/Tutoriales/web/*">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Links