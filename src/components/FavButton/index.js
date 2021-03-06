import React from 'react'
import { Button } from './style'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useHover } from '../../hooks/useHover'
import PropTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const [hover, setHover] = useHover()
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      isHover={hover}
    >
      <Icon size='32px' /> {likes} likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
