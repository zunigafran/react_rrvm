import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <header>
        <nav className='menu'>
            <div className='col'>
            <NavLink to ='/' className='logobttn'>Back to Machine</NavLink>
            </div>
            <div className='col'>
                <span> Pick something else 👉🏿 </span>
            </div>
            <div className='col'>
            <div className='row'>
            <NavLink to='/cakes' className='bttn'>Cakes</NavLink>
            <NavLink to='/nuts' className='bttn'>Nuts</NavLink>
            <NavLink to='/gum' className='bttn'>Gum</NavLink>
            <NavLink to='/soda' className='bttn'>Soda</NavLink>
            <NavLink to='/chips' className='bttn'>Chips</NavLink>
            <NavLink to='/candy' className='bttn'>Candy</NavLink>
            </div>
            </div>
        </nav>
        </header>
    </div>
  )
}

export default Navbar