import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing.jsx'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies,fetchAsyncSeries } from '../../features/movies/movieSlice.js'


const Home = () => {
  
  const dispatch = useDispatch()
  {/* function to hit omdb api */}
 
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncSeries())
  },[dispatch])

  return (
    <section>
      <div className="banner-img">

      </div>
      <MovieListing />
    </section>
  )
}

export default Home