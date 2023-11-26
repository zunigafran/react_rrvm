import React, { useState } from 'react';
import Navbar from './Navbar';

function Candy() {
  const [selectedCandy, setSelectedCandy] = useState(null);

  const handleSelectCandy = (candy) => {
    setSelectedCandy(candy);
  };

  const renderGif = () => {
    switch (selectedCandy) {
      case 'gummyBears':
        return <img src="https://media.giphy.com/media/PqASLvTK3DRjq/giphy.gif" alt="Gummy Bears" />;
      case 'sourPatchKids':
        return <img src="https://media.giphy.com/media/PRwBN8nxiCPWsEo5oD/giphy.gif" alt="Sour Patch Kids" />;
      case 'gummyWorms':
        return <img src="https://media.giphy.com/media/26BRwMuMYXHLgyjTi/giphy.gif" alt="Gummy Worms" />;
      case 'mms':
        return <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXNpaDJwN3cwamNlZDRjZmFwczYzOXd4Njg1YzllaHc1a2MydW9pNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/CHNw2sMdbVbHQBolMh/giphy.gif" alt="M & Ms" />;
      case 'butterFinger':
       return <img src="https://media.giphy.com/media/uvs32vbjzHgOV5ilzv/giphy.gif" alt="Butterfinger" />;
        default:
        return null;
    }
  };

  return (
  <>
  <Navbar />
    <div>
      <h2>Select your candy:</h2>
      <select onChange={(e) => handleSelectCandy(e.target.value)}>
        <option value="" disabled selected>
          Choose a candy
        </option>
        <option value="gummyBears">Gummy Bears</option>
        <option value="sourPatchKids">Sour Patch Kids</option>
        <option value="gummyWorms">Gummy Worms</option>
        <option value="mms">M & M</option>
        <option value="butterFinger">Butterfinger</option>
      </select>

      {selectedCandy && (
        <div>
          <h3>You selected {renderGif() && renderGif().props.alt}</h3>
          {renderGif()}
        </div>
      )}
    </div>
  </>
  );
}

export default Candy;
