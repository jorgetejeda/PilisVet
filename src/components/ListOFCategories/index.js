import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './style'

function useCategoriesData () {
  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    window
      .fetch('https://petgram-api-ashy.vercel.app/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
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
                <Category {...category} />
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
