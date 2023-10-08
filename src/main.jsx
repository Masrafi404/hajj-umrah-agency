import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Home/Main/Main.jsx';
import About from './Components/About/About.jsx';
import SignUp from './Components/User/SignUp/SignUp.jsx';
import Login from './Components/User/Login/Login.jsx';
import AuthProvider from './Components/Provider/AuthProvider.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Users from './Components/Users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '/dashboard/users',
            element: <Users />
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
