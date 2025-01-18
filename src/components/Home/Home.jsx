import React, { useEffect } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing.jsx'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies,fetchAsyncSeries } from '../../features/movies/movieSlice.js'


const Home = () => {
  
  const dispatch = useDispatch()
  {/* function to hit omdb api */}
 
  useEffect(() => {
    dispatch(fetchAsyncMovies("one piece"))
    dispatch(fetchAsyncSeries("one piece"))
  },[dispatch])

  return (
    <section className='home'>
      <div className="banner-img">

      </div>
      <MovieListing />
    </section>
  )
}

export default Home