import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import DarkMode from "./components/mode";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages';
import User from './pages/users/user';
import Course from './pages/courses/course';
import Instructor from './pages/instructors/instructor';
import Dashboard from './pages/dashboard/dashboard';
import Header from './shared/header';
import SingleProfil from './pages/users/singleProfil';
import SingleProfilI from './pages/instructors/singleProfil';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <User />,
  },
  {
    path: "/courses",
    element: <Course />,
  },
  {
    path: "/instructors",
    element: <Instructor />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user/:id",
    element: <SingleProfil />,
  },
  {
    path: "/instructor/:id",
    element: <SingleProfilI />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
