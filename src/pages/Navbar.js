import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <Link to ='/'>My Vending Machine</Link>
        </div>
        <nav className='menu'>
            <ul className='ul'>
                <li>
                    <Link to='/soda'>Soda</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar