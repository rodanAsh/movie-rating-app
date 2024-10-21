import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:{}
}

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        addMovies:(state,{payload}) => {
            state.movies = payload
        }
    }
})

export const {addMovies} = movieSlice.actions
// function to get  state from store
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer