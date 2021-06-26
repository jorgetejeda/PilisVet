import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './style'
import { useCategoriesData } from '../../hooks/useCategoriesData'

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  // Haremos aparecer el render list flotante una vez que el
  // Scroll pase de los 200px
  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 100
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    // Vamos a escuchar el evento del scroll
    document.addEventListener('scroll', onScroll)
    // Cuando cambiemos de pagina vamos a remover el listener de scroll
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    return (
      // <List className={fixed ? 'fixed' : ''}>
      <List fixed={fixed}>
        {
          loading
            ? <Item key='loading'><Category /></Item>
            : categories.map((category) => (
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`} />
              </Item>
            )
            )
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
