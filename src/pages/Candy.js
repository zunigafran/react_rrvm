// CandyComponent.js
import React, { useState, useEffect } from 'react';

const Candy = () => {
  const [candies, setCandies] = useState([]);

  const flavors = {
    mms: ['Red', 'Blue', 'Yellow', 'Green', 'Brown'],
    lifesavers: ['Cherry', 'Orange', 'Lime', 'Strawberry', 'Raspberry'],
    skittles: ['Red', 'Orange', 'Yellow', 'Green', 'Purple'],
  };

  const getRandomPosition = () => ({
    top: `${Math.random() * 100}%`,
    right: `${Math.random() * 100}%`,
  });

  const createCandy = (type, flavor) => {
    return {
      type,
      flavor,
      position: getRandomPosition(),
    };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const candyType = Math.floor(Math.random() * 3);
      const candyFlavor = Math.floor(Math.random() * 5);
      const candy = createCandy(
        candyType === 0 ? 'mms' : candyType === 1 ? 'lifesavers' : 'skittles',
        flavors[candyType === 0 ? 'mms' : candyType === 1 ? 'lifesavers' : 'skittles'][candyFlavor]
      );
      setCandies((prevCandies) => [...prevCandies, candy]);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="candy-container">
      {candies.map((candy, index) => (
        <div
          key={index}
          className={`candy ${candy.type}`}
          style={{ ...candy.position, animationDuration: `${Math.random() * 2 + 1}s` }}
        >
          {candy.flavor}
        </div>
      ))}
    </div>
  );
};

export default Candy;
