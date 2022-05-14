import { useEffect, useState } from 'react'
import axios from 'axios'

function ScrollMovies(pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [movies, setMovies] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
     axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BE_URL}/movie/top_rated`,
      params: {page: pageNumber, api_key: process.env.REACT_APP_BE_API_KEY },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setMovies(prevMovies => {
        return [...new Set([...prevMovies, ...res.data.results])]
      })
      setHasMore(res.data.results.length > 0)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    
    return () => cancel()
  }, [pageNumber])

  return { loading, error, movies, hasMore }
}

export default ScrollMovies