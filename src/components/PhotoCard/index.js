import React from 'react'
import { ImgWrapper, Img, Article } from './style'
// import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { useMuationToogleLike } from '../../hooks/useMutationToggleLike'
import { Link } from '@reach/router'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  // const key = `like-${id}`
  // const [liked, setLiked] = useLocalStorage(key, false)
  const [show, element] = useNearScreen()
  const { likeMutation } = useMuationToogleLike()

  const handleFavClick = () => {
    likeMutation({ variables: { input: { id } } })
    // setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}
