import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovieOrSeriesDetail, getSelectedMovieOrSeries } from '../../features/movies/movieSlice'

const MovieDetail = () => {
  const {imdbID} = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieOrSeries)
  console.log(data);
  
  useEffect(() => {
    dispatch(fetchMovieOrSeriesDetail(imdbID))
  },[dispatch,imdbID])
  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail