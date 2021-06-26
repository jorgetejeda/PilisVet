import { useState, useEffect } from 'react'

export const useCategoriesData = () => {
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
