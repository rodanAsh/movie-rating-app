import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/api/movieApi.js'
import {apiKey} from '../../common/api/MovieApikey.js'

{/* createAsyncThunk(identifier,callback) -redux api for middleware */}
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async(term) => {
    const response = await movieApi.get(`?apiKey=${apiKey}&s=${term}&type=movie`)
      .catch((err) => console.error(err))

    return response.data
})

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', async(term) => {
    const response = await movieApi.get(`?apiKey=${apiKey}&s=${term}&type=series`)
        .catch((err) => console.log(err))

        return response.data
})

export const fetchMovieOrSeriesDetail = createAsyncThunk('movies/fetchMovieOrSeriesDetail',async(id) => {
    const response = await movieApi.get(`?apiKey=${apiKey}&i=${id}&plot=full`)
    
    return response.data
})

const initialState = {
    movies:{},
    series:{},
    selectedMovieOrSeries:{},
    isMovieLoading: false,
    isSeriesLoading: false
}

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        removeSelectedMovieOrSeries: (state) => {
            state.selectedMovieOrSeries = {};
        },
    },
    extraReducers: (builder) => {
        builder.
        addCase(fetchAsyncMovies.pending,(state) => {
            console.log("Loading")
            return {...state, isMovieLoading:true}
        })
        .addCase(fetchAsyncMovies.fulfilled,(state,{payload}) => {
            console.log("fetched successfully")
            return {...state,movies:payload,isMovieLoading:false}
        })
        .addCase(fetchAsyncMovies.rejected,() => {
            console.log("Rejected")
        })
        .addCase(fetchAsyncSeries.pending,(state) => {
            console.log("Loading")
            return {...state,isSeriesLoading:true}
        })
        .addCase(fetchAsyncSeries.fulfilled,(state,{payload}) => {
            console.log("fetched successfully")
            return {...state,series:payload,isSeriesLoading:false}
        })
        .addCase(fetchAsyncSeries.rejected,() => {
            console.log("Rejected")
        })
        .addCase(fetchMovieOrSeriesDetail.pending,() => {
            console.log("Pending");
        })
        .addCase(fetchMovieOrSeriesDetail.fulfilled,(state,{payload}) => {
            console.log("fetched Successfully");
            return {...state,selectedMovieOrSeries:payload}  
        })
        .addCase(fetchMovieOrSeriesDetail.rejected,() => {
            console.log('Rejected');
        })
    }
})

export const {removeSelectedMovieOrSeries} = movieSlice.actions
// function to get  state from store
export const getAllMovies = (state) => state.movies.movies
export const getAllSeries = (state) => state.movies.series
export const getSelectedMovieOrSeries = (state) => state.movies.selectedMovieOrSeries
export const getIsMovieLoading = (state) => state.movies.isMovieLoading
export const getIsSeriesLoading = (state) => state.movies.isSeriesLoading

export default movieSlice.reducer
