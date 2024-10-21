import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing.jsx'
import movieApi from '../../common/api/movieApi.js'
import {apiKey} from '../../common/api/MovieApikey.js'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movies/movieSlice.js'

const Home = () => {
  const movieText = "One piece"
  const dispatch = useDispatch()
  {/* function to hit omdb api */}
  const fetchMovies = async() => {
    const response = await movieApi.get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
      .catch((err) => console.error(err))

    dispatch(addMovies(response.data))
  }

  useEffect(() => {
    fetchMovies()
  },[])

  return (
    <section>
      <div className="banner-img">

      </div>
      <MovieListing />
    </section>
  )
}

export default Home