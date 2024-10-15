import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import DarkMode from "./components/mode";
import { ClerkProvider } from '@clerk/clerk-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages';
import User from './pages/users/user';
import Course from './pages/courses/course';
import Instructor from './pages/instructors/instructor';
import Dashboard from './pages/dashboard/dashboard';
import Header from './shared/header';

// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_dmFzdC1pbXBhbGEtODkuY2xlcmsuYWNjb3VudHMuZGV2JA"

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const App: React.FC = () => {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}

const router = createBrowserRouter([
  {
    path: "/app",
    element: <App />,
  },
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
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <Header />
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
