import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './style'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // console.log(element.current)
    import('intersection-observer')
      .then(() => {
        const observer = new window.IntersectionObserver((entries) => {
          const { isIntersecting } = entries[0]
          // console.log(isIntersecting)
          if (isIntersecting) {
            console.log(isIntersecting)
            setShow(true)
            // Para que el observador no se vuelva actualizar
            // Cuando aparezcan las que estane n la pantalla
            observer.disconnect()
          // OJO, si los elementos que se van a renderizar empiezan teniendo un height 0 para despues adaptarse al tamano mientras esta renderizandose la pagina InterserctionObserver los notara como la propiedad isIntersecting sera true aunque despues que cargue la pagina no vean los demas elementos
          }
        })
        observer.observe(element.current)
      })
  }, [element])

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32px' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
