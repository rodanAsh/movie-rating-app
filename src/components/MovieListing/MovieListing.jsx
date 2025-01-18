import React from 'react'
import Slider from 'react-slick'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllSeries } from '../../features/movies/movieSlice'
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"
import { Settings } from '../../common/settings'

const MovieListing = () => {

  const movies = useSelector(getAllMovies)
  const series = useSelector(getAllSeries)
  let renderMovies = ""
  let renderSeries = ""

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (<div className='movies-error'><h3>{movies.Error}</h3></div>)
  console.log(movies)

  renderSeries = series.Response === "True" ? (
    series.Search.map((series,index) => (
      <MovieCard key={index} data={series} />
    ))
  ) : (<div className='series-error'><h3>{series.Error}</h3></div>)
  console.log(series)
  
  return (
    <section className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...Settings}>
            {renderMovies}
          </Slider>
        </div>
      </div>
      <div className='show-list'>
        <h2>Series</h2>
        <div className='show-container'>
          <Slider {...Settings}>
            {renderSeries}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default MovieListing