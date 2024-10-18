import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss'

const Header = () => {
  return (
    <section className='header'>
      <Link to='/' className='link'>
        <div className='logo'>Movie App</div>
      </Link>
      
      <div className='user-img'>
        <img src={user} alt="" />
      </div>
    </section>
  )
}

export default Header