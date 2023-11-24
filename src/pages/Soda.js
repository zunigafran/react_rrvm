import React, { useState } from 'react';
import Navbar from './Navbar';

const Soda = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(''); // State to track selected flavor

  const handleFlavorChange = (event) => {
    setSelectedFlavor(event.target.value);
  };

  return (
    <div className="soda-container">
      <Navbar />
      <label htmlFor="flavorDropdown">Choose a Soda Flavor:</label>
      <select
        id="flavorDropdown"
        value={selectedFlavor}
        onChange={handleFlavorChange}
      >
        <option value="">Select a Flavor</option>
        <option value="orange">Orange</option>
        <option value="grape">Grape</option>
        <option value="pineapple">Pineapple</option>
        <option value="apple">Apple</option>
        <option value="lemonlime">Lemon-Lime</option>
        <option value="gcc">Golden Cola Champagne</option>
      </select>

      <div className={`soda-display ${selectedFlavor}`}>
        {/* Content to fill the screen */}
      </div>
    </div>
  );
};

export default Soda;
