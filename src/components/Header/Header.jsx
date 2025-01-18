import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss'
import { FaSearch } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '../../features/movies/movieSlice';

const Header = () => {
  const [searchTerm,setSearchTerm] = useState("")
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(searchTerm))
    dispatch(fetchAsyncSeries(searchTerm))
    setSearchTerm("")
  }
  return (
    <section className='header'>
        <div className='logo'>
          <Link to='/' className='link'>
            Movie App
          </Link>
        </div>

        <div className='search-bar'>
          <form onSubmit={submitHandler}>
            <input type="text" placeholder='Search movie or series' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='submit'><FaSearch /></button>
          </form>
        </div>
      
      <div className='user-img'>
        <img src={user} alt="" />
      </div>
    </section>
  )
}

export default Header