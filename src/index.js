import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Cakes from './pages/Cakes';
import Nuts from './pages/Nuts';
import Gum from './pages/Gum';
import Soda from './pages/Soda';
import Chips from './pages/Chips';
import Candy from './pages/Candy';
import Error from './pages/Error';

const Root = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="cakes" element={<Cakes />} />
        <Route path="nuts" element={<Nuts />} />
        <Route path="gum" element={<Gum />} />
        <Route path="soda" element={<Soda />} />
        <Route path="chips" element={<Chips />} />
        <Route path="candy" element={<Candy />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
