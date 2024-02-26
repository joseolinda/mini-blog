import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './style.css';
import NewPost from './pages/NewPost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App isError={false} />
  },
  {
    path: "/profile",
    element: <App isError={true} />
  },
  {
    path: "/posts/new",
    element: <NewPost />,
  },
  {
    path: "/help",
    element: <App isError={true} />
  },
  {
    path: "/search",
    element: <App isError={true} />
  },
  {
    path: "*",
    element: <App isError={true} />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
