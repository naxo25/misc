import React, { useState, useEffect } from 'react'
import store from './store'

const Home = () => {

  const [lineas, setPath] = useState([])

  useEffect(()=> {
    const ruta = location.pathname.replace('/Tutoriales/web/', '') || 'Linux'
    const resp = (store[ruta])
    setPath(resp)
  })

  return (
  	<div className='cont-App'>

      <> {

        lineas && lineas.length > 0 ? (
          lineas.map((item, key) => (
            <p key={key} className={item.class}>
              <a href={ item.link } target='_blank'>
                { item.linea }
              </a>
            </p>
          ))
        ) : (
          <p> loading.. </p>
        )

      } </>

  	</div>
  )
}

export default Home