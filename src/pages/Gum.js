import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Gum() {
  const [selectedFlavor, setSelectedFlavor] = useState(null);

  useEffect(() => {
    let interval;
    const sizes = [25, 50, 100, 200, 400, 600];

    const animateCircle = () => {
      sizes.forEach((size, index) => {
        setTimeout(() => {
          // Update UI with the circle of the current size and color
          const circle = document.getElementById('circle');
          if (circle) {
            circle.style.width = `${size}px`;
            circle.style.height = `${size}px`;
            circle.style.backgroundColor = getFlavorColor(selectedFlavor);

            if (index === sizes.length - 1) {
              setTimeout(() => {
                // Hide the circle after the last size
                circle.style.width = '0';
                circle.style.height = '0';
              }, 500);
            }
          }
        }, index * 500);
      });
    };

    if (selectedFlavor) {
      // Initial animation
      animateCircle();

      // Set up interval for continuous animation
      interval = setInterval(() => {
        animateCircle();
      }, sizes[sizes.length - 1] * 500 + 500);

      // Cleanup interval on component unmount or flavor change
      return () => clearInterval(interval);
    }
  }, [selectedFlavor]);

  const getFlavorColor = (flavor) => {
    switch (flavor) {
      case 'regular':
        return '#ffc0cb';
      case 'cherry':
        return '#ff0000';
      case 'cinnamon':
        return '#800020';
      case 'juicyfruit':
        return '#ffe58e';
      case 'spearmint':
        return '#aaf0d1';
      case 'winterfresh':
        return '#55eeea';
      default:
        return 'black'; // Default color if flavor is not recognized
    }
  };

  return (
  <>
  <Navbar />
    <div>
      <h2>Choose a gum flavor:</h2>
      <button onClick={() => setSelectedFlavor('regular')}>Regular Gum</button>
      <button onClick={() => setSelectedFlavor('cherry')}>Cherry Gum</button>
      <button onClick={() => setSelectedFlavor('cinnamon')}>Cinnamon Gum</button>
      <button onClick={() => setSelectedFlavor('juicyfruit')}>Juicy Fruit Gum</button>
      <button onClick={() => setSelectedFlavor('spearmint')}>Spearmint Gum</button>
      <button onClick={() => setSelectedFlavor('winterfresh')}>WinterFresh Gum</button>

      {selectedFlavor && (
        <div id="circle" className="circle"></div>
        )}
    </div>
  </>
  );
}

export default Gum;
