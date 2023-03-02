import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Routes/Home';
import About from './Routes/About';
import Services from './Routes/Services';
import Contact from './Routes/Contact';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
