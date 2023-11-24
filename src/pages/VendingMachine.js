import React from 'react'
import { Link } from 'react-router-dom'

function VendingMachine() {
  return (
    <div className='vending'>
      <div>
        <span></span>
        <h1>Pick an item, don't be afraid...</h1>
      </div>
        <div className='vndnav'>
            <ul className='col'>
              <div className='left'>
                <li className='card'>
                    <Link to='/cakes' className='btn'>🍰 Cakes 🍰</Link>
                </li>
                <li className='card'>
                    <Link to='/nuts' className='btn'>🥜 Nuts 🥜</Link>
                </li>
                <li className='card'>
                    <Link to='/gum' className='btn'>🍬 Gum 🍬</Link>
                </li>
              </div>
            </ul>
            <ul className='col'>
              <div className='right'>
                <li className='card'>
                    <Link to='/soda' className='btn'>🥤 Soda 🥤</Link>
                </li>
                <li className='card'>
                    <Link to='/chips' className='btn'>🫓 Chips 🫓</Link>
                </li>
                <li className='card'>
                    <Link to='/candy' className='btn'>🍫 Candy 🍫</Link>
                </li>
              </div>
            </ul>
        </div>
    </div>
  )
}

export default VendingMachine
