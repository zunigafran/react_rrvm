import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import VendingMachine from './pages/VendingMachine';
import Cakes from './pages/Cakes';
import Nuts from './pages/Nuts';
import Gum from './pages/Gum';
import Soda from './pages/Soda';
import Chips from './pages/Chips';
import Candy from './pages/Candy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<VendingMachine />} />
      <Route path="cakes" element={<Cakes />} />
      <Route path="nuts" element={<Nuts />} />
      <Route path="gum" element={<Gum />} />
      <Route path="soda" element={<Soda />} />
      <Route path="chips" element={<Chips />} />
      <Route path="candy" element={<Candy />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
