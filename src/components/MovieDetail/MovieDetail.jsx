import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieOrSeriesDetail,
  getSelectedMovieOrSeries,
  removeSelectedMovieOrSeries,
} from "../../features/movies/movieSlice";
import { FaStar, FaThumbsUp, FaFilm, FaCalendar } from "react-icons/fa";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrSeries);
  console.log(data);

  useEffect(() => {
    dispatch(fetchMovieOrSeriesDetail(imdbID));

    return () => {
      dispatch(removeSelectedMovieOrSeries());
    };
  }, [dispatch, imdbID]);
  return (
    <section className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                <span>IMDB Rating</span> <FaStar /> : {data.imdbRating}
              </span>
              <span>
                <span>IMDB Votes</span> <FaThumbsUp /> : {data.imdbVotes}
              </span>
              <span>
                <span>Runtime</span> <FaFilm /> : {data.Runtime}
              </span>
              <span>
                <span>Year</span> <FaCalendar /> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </section>
  );
};

export default MovieDetail;
