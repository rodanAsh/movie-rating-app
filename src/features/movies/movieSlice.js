import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/api/movieApi.js'
import {apiKey} from '../../common/api/MovieApikey.js'

{/* createAsyncThunk(identifier,callback) -redux api for middleware */}
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async() => {
    const movieText = "One piece"
    const response = await movieApi.get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
      .catch((err) => console.error(err))

    return response.data
})

export const fetchAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', async() => {
    const seriesText = "dark"
    const response = await movieApi.get(`?apiKey=${apiKey}&s=${seriesText}&type=series`)
        .catch((err) => console.log(err))

        return response.data
})

const initialState = {
    movies:{},
    series:{}
}

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        addMovies:(state,{payload}) => {
            state.movies = payload
        },
        addSeries:(state,{payload}) => {
            state.series = payload
        }
    },
    extraReducers: (builder) => {
        builder.
        addCase(fetchAsyncMovies.pending,() => {
            console.log("Loading")
        })
        .addCase(fetchAsyncMovies.fulfilled,(state,{payload}) => {
            console.log("fetched successfully")
            return {...state,movies:payload}
        })
        .addCase(fetchAsyncMovies.rejected,() => {
            console.log("Rejected")
        })
        .addCase(fetchAsyncSeries.pending,() => {
            console.log("Loading")
        })
        .addCase(fetchAsyncSeries.fulfilled,(state,{payload}) => {
            console.log("fetched successfully")
            return {...state,series:payload}
        })
        .addCase(fetchAsyncSeries.rejected,() => {
            console.log("Rejected")
        })
    }
})

export const {addMovies} = movieSlice.actions
// function to get  state from store
export const getAllMovies = (state) => state.movies.movies
export const getAllSeries = (state) => state.movies.series

export default movieSlice.reducer

// {
//     [fetchAsyncMovies.pending]: () => {
//         console.log("Pending")
//     },
//     [fetchAsyncMovies.fulfilled]: (state,{payload}) => {
//         console.log("fetched sucessfully")
//         return {...state,movies:payload}
//     },
//     [fetchAsyncMovies.rejected]: () => {
//         console.log("Rejected")
//     }
// }