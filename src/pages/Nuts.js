import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Default from '../assets/default.png';

function Nuts() {
  const [selectedNut, setSelectedNut] = useState(null);

  useEffect(() => {
    let shakeTimeout;

    if (selectedNut) {
      shakeTimeout = setTimeout(() => {
        setSelectedNut(null);
      }, 3000);
    }

    return () => clearTimeout(shakeTimeout);
  }, [selectedNut]);

  const handleNutClick = (nut) => {
    setSelectedNut(nut);
  };

  const nuts = [
    'Pistachios',
    'Planters',
    'Hazelnuts',
    'Pinenuts',
    'Almonds',
    'Cashews',
    'Unsalted',
    'Peanuts',
    'Walnuts',
  ];

  return (
    <>
      <Navbar />
      <div className="nuts-container">
        <div className="nut-image" onClick={() => handleNutClick(selectedNut)}>
          {selectedNut ? (
            <img
              src={`src/assets/${selectedNut}.png`}
              alt={selectedNut}
              className={`nut-image ${selectedNut ? 'shake' : ''}`}
            />
          ) : (
            <img
              src={Default} // Replace with the path to your default image
              alt="Default Nut"
              className="nut-image"
            />
          )}
        </div>
        <div className="nut-grid">
          {nuts.map((nut) => (
            <div
              key={nut}
              className={`nut-item ${selectedNut === nut ? 'selected' : ''}`}
              onClick={() => handleNutClick(nut)}
            >
              {nut}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Nuts;
