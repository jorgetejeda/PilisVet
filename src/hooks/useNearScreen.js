import { useState, useEffect, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)

  const [show, setShow] = useState(false)
  useEffect(() => {
    // Validar si intersection observer esta disponible en el navegador
    Promise.resolve(
      typeof window.InterserctionObserver !== 'undefined'
        ? window.InterserctionObserver
        : import('intersection-observer').then(() => {
          const observer = new window.IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0]
            // console.log(isIntersecting)
            if (isIntersecting) {
            //   console.log(isIntersecting)
              setShow(true)
              // Para que el observador no se vuelva actualizar
              // Cuando aparezcan las que estane n la pantalla
              observer.disconnect()
              // OJO, si los elementos que se van a renderizar empiezan teniendo un height 0 para despues adaptarse al tamano mientras esta renderizandose la pagina InterserctionObserver los notara como la propiedad isIntersecting sera true aunque despues que cargue la pagina no vean los demas elementos
            }
          })
          observer.observe(element.current)
        })
    )
  }, [element])

  return [show, element]
}
