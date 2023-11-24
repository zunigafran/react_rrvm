import React, { useState } from 'react';
import snackImage from '../assets/chips-snack.svg';
import Navbar from './Navbar';

const Chips = () => {
  const [bags, setBags] = useState([]);

  const getRandomPosition = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    return { x, y };
  };

  const handleButtonClick = () => {
    const newPosition = getRandomPosition();
    setBags([...bags, newPosition]);
  };

  return (
    <>
    <Navbar />
    <div style={{ position: 'relative', height: '100vh' }}>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px',
          fontSize: '16px',
        }}
        onClick={handleButtonClick}
      >
        Give me a bag
      </button>

      {bags.map((position, index) => (
        <img
        key={index}
        src={snackImage}
        alt="bag"
        style={{
          position: 'absolute',
          width: '150px',
          height: '150px',
          top: `${position.y}px`,
          left: `${position.x}px`,
        }}
        />
        ))}
    </div>
    </>
  );
};

export default Chips;
