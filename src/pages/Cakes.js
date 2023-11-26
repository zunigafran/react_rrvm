import React, { useState } from 'react';
import Navbar from './Navbar';

function Cakes() {
  const [selectedCakes, setSelectedCakes] = useState(null);

  const handleSelectCakes = (cakes) => {
    setSelectedCakes(cakes);
  };

  const renderGif = () => {
    switch (selectedCakes) {
      case 'shortCake':
        return <img src="https://media.giphy.com/media/136D2z0JqUMUpi/giphy.gif" alt="Strawberry Shortcake" />;
      case 'vanilla':
        return <img src="https://media.giphy.com/media/FpZFdJBiElYHOZZ09G/giphy.gif" alt="Vanilla" />;
      case 'chocolate':
        return <img src="https://media.giphy.com/media/udA2Fe86iC1wc/giphy.gif" alt="Chocolate" />;
      case 'tiramasu':
        return <img src="https://media.giphy.com/media/u7tqOOgVZaQIUsGT7n/giphy-downsized-large.gif" alt="Tiramasu" />;
      case 'cornbread':
        return <img src="https://media.giphy.com/media/8mJGTEvi4cmlO/giphy.gif" alt="Cornbread" />;
        default:
        return null;
    }
  };

  return (
  <>
  <Navbar />
    <div>
      <h2>Select your cake:</h2>
      <select onChange={(e) => handleSelectCakes(e.target.value)}>
        <option value="" disabled selected>
          Choose a cake
        </option>
        <option value="shortCake">Strawberry Shortcake</option>
        <option value="vanilla">Vanilla</option>
        <option value="chocolate">Chocolate</option>
        <option value="tiramasu">Tiramasu</option>
        <option value="cornbread">Cornbread</option>
      </select>

      {selectedCakes && (
        <div>
          <h3>You selected {renderGif() && renderGif().props.alt}</h3>
          {renderGif()}
        </div>
      )}
    </div>
  </>
  );
}

export default Cakes;
