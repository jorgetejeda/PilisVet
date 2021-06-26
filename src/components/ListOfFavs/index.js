import React from 'react'
import { Grid, Image, Link } from './style'
import { useGetFavs } from '../../hooks/useGetFavs'

export const ListOfFavs = () => {
  const { data, error, loading } = useGetFavs()

  if (loading) return <h1>Loading..</h1>
  if (error) return <h1>Ha ocurrido une error..</h1>

  return (
    <Grid>
      {data && data.favs.length === 0
        ? <h1>No hay archivos aun</h1>
        : <>
          {data &&
            data.favs.map((fav) => {
              return (
                <Link key={fav.id} to={`/detail/${fav.id}`}>
                  <Image key={fav.id} src={fav.src} />
                </Link>
              )
            })}
          </>}
    </Grid>
  )
}
